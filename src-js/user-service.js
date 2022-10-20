
const users = [{
  name: 'Bob Fornal',
  userId: 'user-001',
  title: 'Senior Solutions Developer',
  username: 'bob-fornal',
  email: 'bob.fornal@sample.com'
}];
const types = {
  developer: ['Solutions Developer', 'Senior Solutions Developer'],
  management: ['Scrum Master']
};

export function ApiService (userData, typeData) {

  let users = userData;
  let types = typeData;

  const setData = (data) => {
    users = data;
  };
  const setTypes = (data) => {
    types = data;
  }

  const userModel = (user) => {
    switch (true) {
      case (types.developer.includes(user.title) === true):
        user.type = 'developer';
        break;
      case (types.management.includes(user.title) === true):
        user.type = 'management';
        break;
      default:
        user.type = 'unknown';
        break;
    }
    return user;
  };
  
  const getUsers = () => {
    if (users === undefined) return [];
    return users.map((user) => userModel(user));
  };
  
  const getUser = (userId) => {
    const user = users.find((datum) => datum.userId === userId);
    if (user === undefined) return null;
    return userModel(user);
  };

  const setUsername = (userId, name) => {
    const user = users.find((datum) => datum.userId === userId);
    if (user !== undefined) {
      user.name = name;
    }
    return users;
  };

  return {
    users,
    types,
    setData,
    userModel,
    getUsers,
    getUser,
    setUsername
  };
}
