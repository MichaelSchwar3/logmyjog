export const fetchComments = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/comments',
  });
};

export const createComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: { comment }
  });
};

export const removeComment = (commentId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`,
  });
};
