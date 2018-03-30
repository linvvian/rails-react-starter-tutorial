class Quote
  include Mongoid::Document
  field :index, type: Integer
  field :text, type: String
  field :author, type: String

  def next_index
    self.class.where(:index.gt => self.index).pluck(:index).first
  end

  def previous_index
    self.class.where(:index.lt => self.index).pluck(:index).last
  end
end
