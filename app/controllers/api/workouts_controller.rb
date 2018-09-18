class Api::CommentsController < ApplicationController

  def index
    @workouts = Workout.all
  end

  def show
    @workout = Workout.find(params[:id])
  end

  def create
    @workout = Workout.new(workout_params)
    if @workout.save
      render :show
    else
      render json: @workout.errors.full_messages, status: 401
    end
  end

  def edit
    @workout = Workout.find(params[:id])
    render json: `/api/workouts/#{@workout.id}/edit`
  end

  def update
    if @workout.update(workout_params)
      render 'api/workouts/show'
    else
      render json: @workout.errors.full_messages, status: 401
    end
  end

  def destroy
    @workout = Workout.find(params[:id])
    @workout.destroy
    render :show
  end

  private

  def workout_params
    params.require(:workout).permit(:name, :start_time, :description, :distance, :duration)
  end

  end
