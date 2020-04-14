const users = [
  {
    id: 1,
    name: 'Lune Bakami',
    email: 'lunebakami@gmail.com',
  },
  {
    id: 2,
    name: 'Joyce Kelly',
    email: 'joycekelly@gmail.com',
  },
];

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0],
  },

  Mutation: {
    createUser: () => users[0],
  },
};
