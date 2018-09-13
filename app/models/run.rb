class Run < ApplicationRecord

  validates :distance, :run_map, :name, presence:true

  belongs_to :runner,
    foreign_key: :runner_id,
    class_name: :User

end
