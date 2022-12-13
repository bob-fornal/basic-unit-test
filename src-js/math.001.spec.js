
// Node Assert
import assert from 'assert';

import { sum, subtract } from './math.js';

// The simplest form of a test:
// A test is code that throws an error when the actual result of
// something does not match the expected output.
const test001 = () => {
  const actual = true;
  const expected = false;
  
  if (actual !== expected) {
    throw new Error(`${ actual } is not ${ expected }`);
  }  
};
// test001();

const math001 = () => {
  let result, expected;

  result = sum(3, 7);
  expected = 10;
  if (result !== expected) {
    throw new Error(`${ result } is not ${ expected }`);
  }

  result = subtract(7, 3);
  expected = 4;
  if (result !== expected) {
    throw new Error(`${ result } is not ${ expected }`);
  }
};
// math001();

// One of the most important parts of testing frameworks (or assertion
// libraries) is how helpful their error messages are.
const math002 = () => {
  let result, expected;

  result = sum(3, 7);
  expected = 10;
  assert.strictEqual(result, expected);

  result = subtract(7, 3);
  expected = 4;
  assert.strictEqual(result, expected);
};
// math002();

const math003 = () => {
  let result, expected;

  result = sum(3, 7);
  expected = 10;
  expect(result).toBe(expected);
  
  result = subtract(7, 3);
  expected = 4;
  expect(result).toBe(expected);
};
// math003();

const math004 = () => {
  test('"sum" adds numbers', () => {
    const result = sum(3, 7);
    const expected = 10;
    expect(result).toBe(expected);
  });
  
  test('"subtract" subtracts numbers', () => {
    const result = subtract(7, 3);
    const expected = 4;
    expect(result).toBe(expected);
  });
};
// math004();

// ======== TEST ======== //
function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${ title }`);
  } catch (error) {
    console.log(`✘ ${ title }`);
    console.log(error);
  }
}
// ======== EXPECT ======== //
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${ actual } is not ${ expected }`);
      }
    }
  };
}
