class Api::ProductsController < Api::BaseController
  before_filter :authenticate_user!

  respond_to :json

  def index
    @products = Product.all
    respond_with @products
  end

  def show

  end
end