# frozen_string_literal: true

require 'poke-api-v2'

module Poke
  class Query
    attr_reader :name, :pokemon

    def initialize(pokemon)
      @pokemon = PokeApi.get(pokemon:)
      @name = pokemon.titlecase
      @abilities = []
    end

    def abilities
      @pokemon.abilities.each do |ability|
        @abilities << ability.ability.name.titlecase
      end

      @abilities.sort
    end

    def as_json(_options = {})
      {
        name:,
        abilities:,
        sprite: pokemon.sprites.front_default
      }
    end
  end
end
