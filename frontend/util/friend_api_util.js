export const fetchFriends = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/friends`,
  });
};


export const createFriend = (userId, friend) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/friends`,
    data: { friend }
  });
};

export const updateFriend = (userId, friend) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${userId}/friends/${friend.id}`,
    data: { friend }
  });
};

export const removeFriend = (userId, friendId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/friends/${friendId}`,
  });
};
