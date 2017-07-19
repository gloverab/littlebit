class UsersController < ApplicationController
  skip_before_action :authenticate

  def index
    @users = User.all
    json_response(@users)
  end

  def show
    @user = User.find_by_id(params[:id])
    json_response(@user)
  end

  def current
    json_response(current_user)
  end

end
