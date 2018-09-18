class Api::FriendsController < ApplicationController

  def index
    @friends = current_user.frienders + current_user.friendees
  end

  def create
    @friend = Friend.new(friend_params)
    if @friend.save
      @friends = current_user.frienders + current_user.friendees
      render :index
    else
      render json: @friend.errors.full_messages, status: 401
    end
  end

  def update
    @friend = Friend.find(params[:id])
    if @friend.update(friend_params)
      @friends = current_user.frienders + current_user.friendees
      render :index
    else
      render json: @friend.errors.full_messages, status: 401
    end
  end

  def destroy
    @friend = Friend.find(params[:id])
    @friend.destroy
    @friends = current_user.frienders + current_user.friendees
    render :index
  end

private

  def friend_params
    params.require(:friend).permit(:friender_id,:friendee_id,:accepted)
  end

end
