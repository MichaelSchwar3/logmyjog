json.key_format! camelize: :lower
json.extract! @comment, :body, :author_id, :run_id, :created_at, :id
json.fname @comment.author.fname
json.lname @comment.author.lname
json.authorId @comment.author.id
