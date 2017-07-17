Rails.application.routes.draw do
  resources :users
  scope '/api' do
    resources :organizations
    post 'register' => 'auth#register'
    post 'login', to: "sessions#create"
  end
end
