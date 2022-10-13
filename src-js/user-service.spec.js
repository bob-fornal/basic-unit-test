
import { ApiService } from './user-service.js';

describe("ApiService", ()=> {
  let service;

  beforeEach(() => {
    const data = [{
      userId: 'user-001',
      title: 'Solutions Developer',
      username: 'test-user',
      email: 'test@sample.com'
    }];
    service = ApiService(data);
  });
   
  it('expects "getUsers" to return empty array if api data is undefined', () => {
    service.setData(undefined);

    const result = service.getUsers();
    expect(result).toEqual([]);
  });

});

