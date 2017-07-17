class AuthController < ApplicationController

  def log_in
    # You'll need to implement the below method. It should return the
    # user instance if the username and password are valid.
    # Otherwise return nil.
    user = User.find_by_credentials(params)
    if user
      render json: authentication_payload(user)
    else
      render json: { errors: ['Invalid username or password'] }, status: :unauthorized
    end
  end

  def register
    user = User.new(user_params)
    if user.save
      render json: authentication_payload(user)
    else
      render json: { errors: ['Something bad.']}
    end
  end

  private

  def authentication_payload(user)
    return nil unless user && user.id
    {
      auth_token: AuthToken.encode({ user_id: user.id }),
      user: { id: user.id, firstName: user.firstName } # return whatever user info you need
    }
  end

  def user_params
    params.permit(:email, :password, :password_confirmation, :firstName, :lastName)
  end

  def login_params
    params.permit(:auth[:email, :password])
  end
end





class AuthToken
  # Encode a hash in a json web token
  def self.encode(payload, ttl_in_minutes = 60 * 24 * 30)
    payload[:exp] = ttl_in_minutes.minutes.from_now.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  # Decode a token and return the payload inside
  # If will throw an error if expired or invalid. See the docs for the JWT gem.
  def self.decode(token, leeway = nil)
    decoded = JWT.decode(token, Rails.application.secrets.secret_key_base, leeway: leeway)
    HashWithIndifferentAccess.new(decoded[0])
  end
end
