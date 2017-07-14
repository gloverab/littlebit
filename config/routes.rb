Rails.application.routes.draw do
  resources :users
  scope '/api' do
    resources :organizations
    post 'authenticate' => 'auth#authenticate'
    post 'register' => 'auth#register'
  end
end
