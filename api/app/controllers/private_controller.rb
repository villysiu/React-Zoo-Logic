class PrivateController < ApplicationController
  before_action :authenticate_user!
  def get_current_user
    render json: current_user, except: [:created_at, :updated_at]
  end

end
