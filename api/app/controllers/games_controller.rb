class GamesController < ApplicationController
    def index
        games = Game.all
        render json: games, except: [:created_at, :updated_at]
    end
end
