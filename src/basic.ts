
export interface User {
  username: string;
  email: string;
}

export class ApiService {
  getUsers = (): any => {};
}

export class UserHandlerService {

  apiService: any;

  constructor () {
    this.apiService = new ApiService()
  }

  getUsers = (): Array<User> => {
    const users: Array<User> = this.apiService.getUsers();
    if (users === undefined) return [];
    return users.map((user: User) => this.userModel(user));
  };

  userModel = (user: User): User => user;
}