class Api::QuotesController < ApplicationController
    def show
        @quote = Quote.find_by(index: params[:index])
    end
end
