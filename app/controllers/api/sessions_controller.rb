class Api::SessionsController < ApplicationController

   def create
     @user = User.find_by_creds(session_params[:username], session_params[:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: {"login": ["invalid credentials"]}, status: 401
    end
  end

  def destroy
    if current_user
      current_user.reset_session_token!
      session[:session_token] = nil
      render json: {}
    else
      render json: ["not signed in"]
    end
  end


  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
  
end
