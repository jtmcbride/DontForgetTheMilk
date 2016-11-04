class Api::ListsController < ApplicationController


  def index
    @lists = current_user.lists
  end

  def show
    @list = current_user.lists.includes(:tasks).find(params[:id])
    # render json: @list
  end

  def create
    @list = current_user.lists.new(list_params)
    @list.user_id = current_user.id
    if @list.save
      render json: @list
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find(params[:id])
    @list.update(list_params)
    render json: @list
  end

  def destroy
    @list = List.destroy(params[:id])
    render json: @list
  end
  
  private

  def list_params
    params.require(:list).permit(:title)
  end
end
