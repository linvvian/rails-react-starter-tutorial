class PagesController < ApplicationController
  def home
    @first_quote_index = Quote.first.index
  end
end
