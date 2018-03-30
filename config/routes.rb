Rails.application.routes.draw do
  mount OkComputer::Engine, at: '/healthy'
  
  root to: "pages#home"

  namespace :api, defaults: { format: :json } do
    get '/quotes/:index', to: 'quotes#show'
  end
end
