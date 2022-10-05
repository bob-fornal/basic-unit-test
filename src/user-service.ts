
export interface User {
  username: string;
  email: string;
}

export class ApiService {

  constructor() { }

  public getUsers = (): Array<User> => {
    return [];
  };
}

export class UserService {

  apiService: any;

  constructor(){
    this.apiService = new ApiService();
  }

  public getUsers = (): Array<User> => {
    const users: Array<User> = this.apiService.getUsers();
    if (users === undefined) return [];
    return users.map((user: User) => this.userModel(user));
  };

  private userModel = (user: User) => user;
}
