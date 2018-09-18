export const fetchAllUsers = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users',
  });
};
