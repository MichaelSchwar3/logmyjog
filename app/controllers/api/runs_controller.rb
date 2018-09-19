class Api::RunsController < ApplicationController

  def index
    @runs = Run.all
  end

  def show
    @run = Run.find(params[:id])
  end

  def create
    @run = Run.new(run_params)
    if @run.save
      render :show
    else
      render json: @run.errors.full_messages, status: 401
    end
  end

  def edit
    @run = Run.find(params[:id])
    render json: `/api/runs/#{@run.id}/edit`
  end

  def update
    if @run.update(run_params)
      render 'api/runs/show'
    else
      render json: @run.errors.full_messages, status: 401
    end
  end

  def destroy
    @run = Run.find(params[:id])
    @run.destroy
    render :show
  end

private

  def run_params
    params.require(:run).permit(:location, :distance, :run_map, :name, :runner_id)
  end

end
