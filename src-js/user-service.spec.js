
import services from './user-service.js';

describe("UserService", ()=> {

  beforeEach(() => {
  });
   
  it('expects "getUsers" to return empty array if apiService returns undefined', () => {
    spyOn(services.apiService, 'getUsers').and.returnValue(undefined);

    const result = services.userService.getUsers();
    expect(result).toEqual([]);
  });

  it('expects "getUsers" to return empty array if apiService returns undefined', () => {
    spyOn(services.apiService, 'getUsers').and.returnValue(undefined);

    const result = services.userService.getUsers();
    expect(result).toEqual([]);
  });

});