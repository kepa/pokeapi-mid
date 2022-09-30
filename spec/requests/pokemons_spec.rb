require 'rails_helper'

RSpec.describe "Pokemons", type: :request do
  describe "GET /info" do
    it "returns http success" do
      get "/pokemons/info"
      expect(response).to have_http_status(:success)
    end
  end

end
