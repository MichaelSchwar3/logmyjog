class Workout < ApplicationRecord

  validates :name, :description, :distance, :duration, presence:true

  belongs_to :route,
    foreign_key: :run_id,
    class_name: :Run

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_one :route_creator,
    through: :route,
    source: :runner

  has_many :comments,
    foreign_key: :run_id,
    class_name: :Comment

end
