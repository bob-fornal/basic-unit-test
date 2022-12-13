
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

  it('expects "userModel" to assign a proper type', () => {
    const user = { name: 'Bob', title: 'Senior Solutions Developer' };
    const expected = { ...user, type: 'developer' };
    
    const result = service.userModel(user);
    expect(result).toEqual(expected);
  });

  it('expects "userModel" to handle an unknown title', () => {
    const user = { name: 'Bob', title: 'UNKNOWN TITLE' };
    const expected = { ...user, type: 'unknown' };
    
    const result = service.userModel(user);
    expect(result).toEqual(expected);
  });

  it('expects "getUsers" to return empty array if api data is undefined', () => {
    service.users = undefined;

    const result = service.getUsers();
    expect(result).toEqual([]);
  });

  it('expects "getUsers" to return the processed data', () => {
    const userData = [{
      title: 'Solutions Developer'
    }];
    service.setUsers(userData);
    const expected = [{
      title: 'Solutions Developer',
      type: 'developer'
    }];

    const result = service.getUsers();
    expect(result).toEqual(expected);
  });

  it('expects "getUser" to return null if user is undefined', () => {
    const userData = [{
      name: 'Bob Fornal',
      userId: 'user-001',
      title: 'Solutions Developer',
      username: 'test-user',
      email: 'test@sample.com'
    }];
    service.setUsers(userData);
    const userId = 'user-002';

    const result = service.getUser(userId);
    expect(result).toBeNull();
  });

  it('expects "getUser" to return processed user', () => {
    const userData = [{
      name: 'Bob Fornal',
      userId: 'user-001',
      title: 'Solutions Developer',
      username: 'test-user',
      email: 'test@sample.com'
    }];
    service.setUsers(userData);
    const userId = 'user-001';
    const expected = {
      name: 'Bob Fornal',
      userId: 'user-001',
      title: 'Solutions Developer',
      type: 'developer',
      username: 'test-user',
      email: 'test@sample.com'
    };

    const result = service.getUser(userId);
    expect(result).toEqual(expected);
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
