
import { User, ApiService, UserHandlerService } from './basic.ts'

description('Basic Unit Tests', () => {
  let service;

  beforeEach(() => {
    service = new UserHandlerService();
  });

  it('expects true', () => {
    expect(1).toEqual(1);
  });
});
