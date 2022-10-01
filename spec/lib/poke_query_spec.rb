# frozen_string_literal: true

require 'rails_helper'
require_relative '../../lib/poke/query'

RSpec.describe 'Querying PokeAPI' do
  let(:pokemon_name) { Faker::Games::Pokemon.name.downcase }
  let(:pokemon) { Poke::Query.new(pokemon_name) }

  describe 'basic query' do
    it 'should return a valid pokemon if found' do
      expect(pokemon).to be_truthy
    end

    it 'should raise error if not found' do
      expect { Poke::Query.new('f') }.to raise_error(JSON::ParserError, "859: unexpected token at 'Not Found'")
    end
  end

  describe '#name' do
    it 'should return pokemon name' do
      expect(pokemon.name).to eql(pokemon_name.titlecase)
    end
  end

  describe '#abilities' do
    it 'should return a list of abilities' do
      expect(pokemon.abilities.count).to be > 0
    end

    it 'should return a list of abilities in alphabetical order' do
      poke = Poke::Query.new('ditto')
      expect(poke.abilities).to eql(%w[imposter limber])
    end
  end

  describe '#to_json' do
    it 'should return a string that has name and abilities' do
      expect(pokemon.to_json).to include('name')
      expect(pokemon.to_json).to include('abilities')
    end
  end
end
