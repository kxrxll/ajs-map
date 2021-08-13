import ErrorRepository from '../app';

test('should sum', () => {
  const result = ErrorRepository([1, 2, 3]);

  expect(result).toBe(6);
});
