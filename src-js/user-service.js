
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

  constructor(users, types) {
    this.users = users;
    this.types = types;
  }

  setUsers = (data) => {
    this.users = data;
  };
  setTypes = (data) => {
    this.types = data;
  }

  userModel = (user) => {
    return this.types[user.type] || this.types.default;
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
