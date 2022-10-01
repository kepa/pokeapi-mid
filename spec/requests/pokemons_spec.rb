# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Pokemons', type: :request do
  describe 'GET /pokemons' do
    xit 'returns http success' do
      get '/api/pokemons', params: { pokemon_name: 'ditto' }
      expect(response).to contain(%w[imposter limber])
    end
  end
end
