class EditsController < ApplicationController
  before_action :set_edit, only: [:show, :update, :destroy]

  # GET /edits
  def index
    @edits = Edit.all

    render json: @edits
  end

  # GET /edits/1
  def show
    render json: @edit
  end

  # POST /edits
  def create
    @edit = Edit.new(edit_params)

    if @edit.save
      render json: @edit, status: :created, location: @edit
    else
      render json: @edit.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /edits/1
  def update
    if @edit.update(edit_params)
      render json: @edit
    else
      render json: @edit.errors, status: :unprocessable_entity
    end
  end

  # DELETE /edits/1
  def destroy
    @edit.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_edit
      @edit = Edit.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def edit_params
      params.require(:edit).permit(:original_text, :current_text, :new_text, :num_of_edits, :tweet_id)
    end
end
