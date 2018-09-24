class Comment < ApplicationRecord

  validates :body

  belongs_to :workout,
    foreign_key: :run_id,
    class_name: :Workout

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

end
