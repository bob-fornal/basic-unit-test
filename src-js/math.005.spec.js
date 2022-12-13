
// 5.js
import { sum, subtract } from './math.js';

describe('Math', () => {
  it('expects "sum" to add numbers', () => {
    const result = sum(3, 7);
    const expected = 10;
    expect(result).toBe(expected);
  });
  
  it('expects "subtract" to subtract numbers', () => {
    const result = subtract(7, 3);
    const expected = 4;
    expect(result).toBe(expected);
  });
});
