class PokemonsController < ApplicationController
  def info

    @pokemon = PokeApi.get(pokemon: 'ditto')

    respond_to do |format|
        format.json { render :json => @pokemon.abilities }
      end

  end
end
