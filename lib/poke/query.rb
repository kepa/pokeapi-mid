# frozen_string_literal: true

require 'poke-api-v2'

module Poke
  class Query
    attr_reader :name


    def initialize(pokemon)
      @pokemon = PokeApi.get(pokemon: pokemon)
      @name = pokemon.titlecase
      @abilities = []
    end

    def abilities
      @pokemon.abilities.each do |ability|
        @abilities << ability.ability.name
      end

      @abilities.sort
    end

    def as_json(options={})
      {
        :name => self.name,
        :abilities => self.abilities
      }
    end

  end
end
