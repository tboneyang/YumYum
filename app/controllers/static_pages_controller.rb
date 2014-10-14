class StaticPagesController < ApplicationController

  def home
    if signed_in?
      @foodpost   = current_user.foodposts.build
      @feed_items = current_user.feed.paginate(page: params[:page])
    end
  end

  def contact
  end

  def about
  end

  def campus
  end
	
end
