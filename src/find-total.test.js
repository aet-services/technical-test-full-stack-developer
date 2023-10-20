const findTotal = require('./find-total');

test('Input: [1,2,3,4,5] -> Output: 13', () => {
  expect(findTotal([1,2,3,4,5])).toBe(13);
});

test('Input: [17,19,21] -> Output: 9', () => {
  expect(findTotal([17,19,21])).toBe(9);
});

test('Input: [5,5,5] -> Output: 15', () => {
  expect(findTotal([5,5,5])).toBe(15);
});
