import ErrorRepository from '../app';

test('500 test', () => {
  const repo = new ErrorRepository([
    [500, 'Server down'],
    [400, 'Bad request'],
    [700, 'I love bad jokes'],
  ]);

  expect(repo.translate(500)).toEqual('Server down');
});

test('unknown error test', () => {
  const repo = new ErrorRepository([
    [500, 'Server down'],
    [400, 'Bad request'],
    [700, 'I love bad jokes'],
  ]);

  expect(repo.translate(600)).toEqual('Unknown error');
});
