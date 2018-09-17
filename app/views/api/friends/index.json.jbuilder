json.key_format! camelize: :lower
@friends.each do |friend|
  json.set! friend.id do
    json.extract! friend, :friender_id, :friendee_id, :accepted
  end
end
