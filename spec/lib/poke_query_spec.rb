require 'rails_helper'
require_relative '../../lib/poke/query'

RSpec.describe 'Querying PokeAPI' do

  describe 'basic query' do
    let(:pokemon) { Faker::Games::Pokemon.name.downcase }

    it 'should return a valid pokemon if found' do
      poke = Poke::Query.new(pokemon)
      expect(poke).to be_truthy
    end

    it 'should raise error if not found' do
      expect{Poke::Query.new('f')}.to raise_error(JSON::ParserError, "859: unexpected token at 'Not Found'")
    end

  end

end
