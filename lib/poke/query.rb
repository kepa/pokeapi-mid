# frozen_string_literal: true

require 'poke-api-v2'

module Poke
  class Query

    def initialize(pokemon)
      @pokemon = PokeApi.get(pokemon: pokemon)
    end

  end
end
