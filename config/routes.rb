Rails.application.routes.draw do
  #get 'pokemons/info'

  namespace :api do
    get 'pokemons', to: 'pokemons#show'
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pokemons#home"
end
