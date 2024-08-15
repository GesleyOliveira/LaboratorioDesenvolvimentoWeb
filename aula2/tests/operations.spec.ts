import operations from '../src/operations';

describe('Operations', () => {
  test('operations.sum(2,3) should return 5', () => {
    const total = operations.sum(2, 3);

    expect(total).toEqual(5);
  });

  test('operations.sumPositives(-2,3) should fail', () => {});
});
