const { Stack, Aray } = require('./index');

describe('Stack Class', () => {
  test('Stack() object ', () => {
    let test = new Stack();
    expect(test._storage).toEqual({});
  });

  test('.push()', () => {
    let test = new Stack();

    test.push('some 0');
    test.push('some 1');
    test.push('some 2');
    expect(test).toEqual({
      _storage: { 0: 'some 0', 1: 'some 1', 2: 'some 2' },
      _length: 3,
    });
  });

  test('.pop()', () => {
    let test = new Stack();

    expect(test.pop()).toBeUndefined();

    test.push('some 0');
    test.push('some 1');
    test.push('some 2');

    const afterPop = test.pop();
    expect(test).toEqual({
      _storage: { 0: 'some 0', 1: 'some 1' },
      _length: 2,
    });
    expect(afterPop).toEqual('some 2');
  });

  test('.peek()', () => {
    let test = new Stack();

    expect(test.peek()).toBeUndefined();

    test.push('some 0');
    test.push('some 1');

    const afterPeek = test.peek();
    expect(test).toEqual({
      _storage: { 0: 'some 0', 1: 'some 1' },
      _length: 2,
    });
    expect(afterPeek).toEqual('some 1');
  });
});

test('Aray Class tests', () => {
  let test = new Aray();

  expect(test._storage).toEqual('');

  test.push('so');
  const afterPush = test.push('me');
  expect(test).toEqual({
    _storage: 'some',
    _length: 4,
  });
  expect(afterPush).toEqual(4);
});
