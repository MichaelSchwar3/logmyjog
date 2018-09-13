class Api::RunsController < ApplicationController

  def index
    @key = ENV['MAP_API']
    @runs = Run.all
  end

  def show
    @key = ENV['MAP_API']
    @runs = Run.find(params[:id])
  end

  def create
    @key = ENV['MAP_API']
    @run = Run.new(run_params)
    if @run.save
      render :show
    else
      render json: @run.errors.full_messages, status: 401
    end
  end

  def edit
    @key = ENV['MAP_API']
    @run = Run.find(params[:id])
    render json: `/api/runs/#{@run.id}/edit`
  end

  def update
    @key = ENV['MAP_API']
    if @run.update(run_params)
      render 'api/runs/show'
    else
      render json: @run.errors.full_messages, status: 401
    end
  end

  def destroy
    @key = ENV['MAP_API']
    @run = Run.find(params[:id])
    @run.destroy
    render :show
  end

private

  def run_params
    params.require(:run).permit(:location, :distance, :duration, :completed_run, :run_map, :name, :runner_id)
  end

end
