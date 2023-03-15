import { double, concat } from '../__tests__/index';

describe('testing index file', () => {
  test('double function', () => {
    expect(double(5)).toBe(10);
  });

  test('concat function', () => {
    expect(concat('Igor', ' ', 'Leão')).toBe('Igor Leão');
  });
});