class Api::TasksController < ApplicationController

  def index
    if params[:query]
      tasks = current_user.tasks.where("name ILIKE ?", "%#{params[:query]}%")
    elsif params[:timeFrame] == "all"
      tasks = current_user.tasks.all
    elsif params[:timeFrame] == "week"
      tasks = current_user.tasks.where("due_date < '#{Date.today + 7}' and due_date IS NOT NULL")
    else
      tasks = current_user.tasks.where(due_date: Date.today)
    end
    @incomplete_tasks = tasks.where(completed: false)
    @completed_tasks = tasks.where(completed: true)
  end

  def create
    @task = Task.new(task_params)
    @task.list_id = params[:list_id]
    @task.user_id = current_user.id
    if @task.save
      render json: @task
    else
      render json: @task.errors, status: 422
    end
  end

  def show
    @task = current_user.tasks.find(params[:id])
    render json: @task
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
    params.require(:task).permit(:name, :completed, :start_date, :due_date, :priority, :estimate, :list_id)
  end
end
