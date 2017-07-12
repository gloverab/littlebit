Rails.application.routes.draw do
  scope '/api' do
    resources :organizations
  end
end
