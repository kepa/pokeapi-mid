# frozen_string_literal: true

require 'poke/query'

module Api
  class PokemonsController < ApplicationController
    def show
      @pokemon = ::Poke::Query.new(params[:pokemon_name].downcase)
      render json: @pokemon, status: :ok
    rescue JSON::ParserError => e
      render json: { error: e.to_s }, status: 404
    end
  end
end
