
const services = {};
services.apiService = {};
services.userService = {};

function ApiService () {
  const users = [
    {
      userId: 'user-001',
      title: 'Senior Solutions Developer',
      username: 'bob-fornal',
      email: 'bob.fornal@sample.com'
    }
  ];
  
  const getUsers = () => {
    return this.users;
  };
  
  const getUser = (userId) => {
    return this.users.find((user) => user.userId === userId);
  }

  return {
    users,
    getUsers,
    getUser
  };
}

function UserService () {

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
    const users = services.apiService.getUsers();
    if (users === undefined) return [];
    return users.map((user) => this.userModel(user));
  };
  
  const getUser = (userId) => {
    const user = services.apiService.getUser(userId);
    if (user === undefined) return null;
    return this.userModel(user);
  };

  return {
    userModel,
    getUsers,
    getUser
  };
}

services.apiService = ApiService();
services.userService = UserService();

export default services;
