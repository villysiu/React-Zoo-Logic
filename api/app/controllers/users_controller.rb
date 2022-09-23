class UsersController < ApplicationController
    # before_action :authenticate_user!, :only => [:update]

    def index
        @users=User.all 
        # .sort_by{|e| -e[:level]}
        render json: @users, only: [:id, :username, :level] 
    end
    
    def update
        @user=User.find(params[:id])

        @user.update(level: params[:user][:level])
        render json: { message: "level updated" }
    end
   


end
