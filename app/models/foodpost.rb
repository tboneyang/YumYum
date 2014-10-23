class Foodpost < ActiveRecord::Base
  belongs_to :user
  default_scope -> { order('created_at DESC') }
  validates :content,    presence: true, length: { maximum: 300 }
  validates :user_id,    presence: true
  validates :date,       presence: true
  validates :start_time, presence: true
  validates :location,   presence: true
end
