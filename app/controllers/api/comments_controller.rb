class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where(run_id: params[:runId])
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    @comments = Comment.where(run_id: params[:id])
    render :index
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :run_id, :author_id)
  end

end
