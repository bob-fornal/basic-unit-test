
const users = [{
  name: 'Bob Fornal',
  userId: 'user-001',
  title: 'Senior Solutions Developer',
  username: 'bob-fornal',
  email: 'bob.fornal@sample.com'
}];
const types = {
  'Solutions Developer': 'developer',
  'Senior Solutions Developer': 'developer',
  'Scrum Master': 'management',
  default: 'unknown'
};

export class ApiService {

  users;
  types;

  constructor(userData, typeData) {
    this.users = userData;
    this.types = typeData;
  }

  setUsers = (data) => {
    this.users = [ ...data ];
  };
  setTypes = (data) => {
    this.types = { ...data };
  }

  userModel = (user) => {
    user.type = this.types[user.title] || this.types.default;
    return user;
  };
  
  getUsers = () => {
    if (this.users === undefined) return [];
    return this.users.map((user) => this.userModel(user));
  };
  
  getUser = (userId) => {
    const user = this.users.find((datum) => datum.userId === userId);
    if (user === undefined) return null;
    return this.userModel(user);
  };

  setUsername = (userId, name) => {
    const user = this.users.find((datum) => datum.userId === userId);
    if (user !== undefined) {
      user.name = name;
    }
    return this.users;
  };

}
