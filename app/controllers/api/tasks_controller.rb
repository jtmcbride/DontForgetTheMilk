class Api::TasksController < ApplicationController

  def index
    @tasks = current_user.tasks.all
    render json: @tasks
  end

  def create
    @task = Task.new(task_params)
    @task.list_id = params[:list_id]
    @task.user_id = current_user.id
    if @task.save
      render json: @task
    else
      render json: @task.errors
    end
  end

  def update
    @task = Task.find(params[:id])
    @task.update(task_params)
    render json: @task
  end

  def destroy
    @task = Task.destroy(params[:id])
    render json: @task
  end

  private

  def task_params
    params.require(:task).permit(:name, :completed, :start_date, :due_date, :priority, :estimate)
  end
end
