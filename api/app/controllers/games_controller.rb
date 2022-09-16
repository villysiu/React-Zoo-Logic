class GamesController < ApplicationController
    before_action :authenticate_user!
    def index
        games = Game.all
        render json: games, except: [:created_at, :updated_at]
    end
end
