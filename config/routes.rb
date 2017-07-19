Rails.application.routes.draw do
  scope '/api' do
    resources :organizations
    post '/register' => 'auth#register'
    post '/login', to: "sessions#create"

    resources :users do
      get 'current_user', to: "users#current"
    end
  end
end
