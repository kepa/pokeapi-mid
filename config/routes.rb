Rails.application.routes.draw do
  #get 'pokemons/info'

  scope '/api' do
    get 'pokemons', to: 'pokemons#info'
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
