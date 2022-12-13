
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

  it('expects "setUsers" to set the service users to the incoming array', () => {
    const userData = [
      { name: 'Bob' },
      { name: 'Jen' },
      { name: 'Patrick' }
    ];

    service.setUsers(userData);
    expect(service.users).toEqual(userData);
  });

  it('expects "setTypes" to set the service users to the incoming array', () => {
    const typeData = {
      'A': 'developer',
      'B': 'developer',
      'C': 'management',
      default: 'unknown'
    };

    service.setTypes(typeData);
    expect(service.types).toEqual(typeData);
  });

  it('expects "setUsername" to do nothing if user does not exist', () => {
    const userData = [{
      name: 'Bob Fornal',
      userId: 'user-001'
    }];
    service.setUsers(userData);
    const userId = 'user-002';
    const name = 'NEW-NAME';
    const expected = [{
      name: 'Bob Fornal',
      userId: 'user-001'
    }];

    const result = service.setUsername(userId, name);
    expect(result).toEqual(expected);
  });

  it('expects "setUsername" to change the users username', () => {
    const userData = [{
      name: 'Bob Fornal',
      userId: 'user-001'
    }];
    service.setUsers(userData);
    const userId = 'user-001';
    const name = 'NEW-NAME';
    const expected = [{
      name: 'NEW-NAME',
      userId: 'user-001'
    }];

    const result = service.setUsername(userId, name);
    expect(result).toEqual(expected);
  });

});
