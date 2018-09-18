json.key_format! camelize: :lower
@friends.each do |fri|
  json.set! fri.id do
    json.extract! fri, :friender_id, :friendee_id, :accepted, :id
    if fri.friender_id == current_user.id
      json.extract! fri.friendee, :fname, :lname, :email
    else
      json.extract! fri.friender, :fname, :lname, :email
    end
  end
end
