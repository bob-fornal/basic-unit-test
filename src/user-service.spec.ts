
import { UserService } from './user-service';

describe("UserService getUsers method test case", ()=> {

  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });
   
  it('Should return Array', () => {
    const result: any = userService.getUsers();
    expect(result).toEqual([]);
  });

});