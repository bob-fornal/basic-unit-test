
const users = [{
  userId: 'user-001',
  title: 'Senior Solutions Developer',
  username: 'bob-fornal',
  email: 'bob.fornal@sample.com'
}];

export function ApiService (data) {

  let users = data;

  const setData = (data) => {
    users = data;
  };

  const userModel = (user) => {
    switch (true) {
      case (user.title === 'Solutions Developer'):
        user.type = 'developer';
        break;
      case (user.title === 'Senior Solutions Developer'):
        user.type = 'developer';
        break;
      case (user.title === 'Scrum Master'):
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

  return {
    users,
    setData,
    userModel,
    getUsers,
    getUser
  };
}
