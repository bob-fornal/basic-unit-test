
export interface User {
  userId: string;
  username: string;
  email: string;
  title: string;
  type?: string;
}

export class ApiService {

  users: Array<User> = [
    {
      userId: 'user-001',
      title: 'Senior Solutions Developer',
      username: 'bob-fornal',
      email: 'bob.fornal@sample.com'
    }
  ]

  public getUsers = (): Array<User> | undefined => {
    return this.users;
  };

  public getUser = (userId: string): User | undefined => {
    return this.users.find((user: User) => user.userId === userId);
  };
}

export class UserService {

  constructor(
    private apiService: ApiService
  ) { }

  private userModel = (user: User): User => {
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

  public getUsers = (): Array<User> => {
    const users: Array<User> | undefined = this.apiService.getUsers();
    if (users === undefined) return [];
    return users.map((user: User) => this.userModel(user));
  };

  public getUser = (userId: string): User | null => {
    const user: User | undefined = this.apiService.getUser(userId);
    if (user === undefined) return null;
    return this.userModel(user);
  };
}
