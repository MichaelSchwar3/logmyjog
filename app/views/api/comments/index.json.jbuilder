json.key_format! camelize: :lower
@comments.each do |comment|
  json.set! run.id do
    json.extract! run, :body, :author_id, :run_id
    json.fname comment.author.fname
    json.lname comment.author.lname
    json.authorId comment.author.id
  end
end
