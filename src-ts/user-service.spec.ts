
import { ApiService, UserService } from './user-service';

describe("UserService", ()=> {

  let apiService: ApiService;
  let service: UserService;

  beforeEach(() => {
    apiService = new ApiService();
    service = new UserService(apiService);
  });
   
  it('expects "getUsers" to return empty array if apiService returns undefined', () => {
    spyOn(service['apiService'], 'getUsers').and.returnValue(undefined);

    const result: any = service.getUsers();
    expect(result).toEqual([]);
  });

  it('expects "getUsers" to return empty array if apiService returns undefined', () => {
    spyOn(service['apiService'], 'getUsers').and.returnValue(undefined);

    const result: any = service.getUsers();
    expect(result).toEqual([]);
  });

});