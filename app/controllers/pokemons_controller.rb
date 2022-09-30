require 'poke/query'

class PokemonsController < ApplicationController
  def info

    begin

      @pokemon = ::Poke::Query.new(params[:pokemon_name])
      render :json => @pokemon, status: :ok

    rescue JSON::ParserError => e
      render json: { error: e.to_s}, status: :not_found
    end


  end
end
