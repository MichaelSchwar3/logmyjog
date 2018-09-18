class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    render json: '/api/users/show'
  end

  def index
    @users = User.all
  end

private

  def user_params
    params.require(:user).permit(:password,:email,:fname,:lname)
  end

end
