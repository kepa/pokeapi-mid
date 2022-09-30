require 'poke/query'

class Api::PokemonsController < ApplicationController

  def show

    begin

      @pokemon = ::Poke::Query.new(params[:pokemon_name])
      render :json => @pokemon, status: :ok

    rescue JSON::ParserError => e
      render json: { error: e.to_s}, status: 404
    end


  end

end
