class FoodpostsController < ApplicationController
  before_action :signed_in_user, only: [:create, :destroy]

  def index
    @foodposts = Foodpost.paginate(page: params[:page])
    if signed_in?
      @foodpost = current_user.foodposts.build
      if @foodpost.save
        redirect_to root_url
      else
        render 'foodposts/index'
      end
    end
  end

  def create
    @foodpost = current_user.foodposts.build(foodpost_params)
    if @foodpost.save
      redirect_to root_url
    else
      @feed_items = []
      render 'static_pages/home'
    end
  end

  def destroy
    Foodpost.find(params[:id]).destroy
    redirect_to root_url
  end

  private
    def foodpost_params
      params.require(:foodpost).permit(:content, :date, :location,
                                       :start_time)
    end

    def correct_user
      @foodpost = current_user.foodpost.find_by(id: params[:id])
      redirect_to root_url if @foodpost.nil?
    end
end
