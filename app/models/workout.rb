class Workout < ApplicationRecord

  validates :name, :start_time, :description, :distance, :duration, presence:true

  belongs_to :route,
    foreign_key: :run_id,
    class_name: :Run

end
