class Api::CommentsController < ApplicationController

  def index
    @comments = Run.find(params[:id]).comments
  end
