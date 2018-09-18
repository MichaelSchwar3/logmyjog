class Comment < ApplicationRecord

  validates :body, presence:true

  belongs_to :author,
    foreign_key: :author_id
    class_name: :User

  belongs_to :run,
    foreign_key: :run_id
    class_name: :Run

end
