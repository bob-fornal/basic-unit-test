
import { ApiService } from './user-service.js';

describe("ApiService", ()=> {
  let service;

  beforeEach(() => {
    const userData = [{
      name: 'Bob Fornal',
      userId: 'user-001',
      title: 'Solutions Developer',
      username: 'test-user',
      email: 'test@sample.com'
    }];
    const typeData = {
      'Solutions Developer': 'developer',
      'Senior Solutions Developer': 'developer',
      'Scrum Master': 'management',
      default: 'unknown'
    };
    service = new ApiService(userData, typeData);
  });

  it('expects "getUsers" to return empty array if api data is undefined', () => {
    service.setUsers(undefined);

    const result = service.getUsers();
    expect(result).toEqual([]);
  });

});

