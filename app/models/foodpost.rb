class Foodpost < ActiveRecord::Base
  belongs_to :user
  default_scope -> { order('date DESC, start_time DESC') }
  default_scope -> { where('date > ?', Time.zone.now.beginning_of_day) }
  validates :content,    presence: true, length: { maximum: 500 }
  validates :user_id,    presence: true
  validates :date,       presence: true
  validates :start_time, presence: true
  validates :location,   presence: true
end
