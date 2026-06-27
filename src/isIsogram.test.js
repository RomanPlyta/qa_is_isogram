'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(
    'should return true for a word with no repeating letters ("playgrounds")',
    () => {
      expect(isIsogram('playgrounds')).toBe(true);
    }
  );

  it(
    'should return false for a word with consecutive repeating letters ("look")',
    () => {
      expect(isIsogram('look')).toBe(false);
    }
  );

  it(
    'should return false for a word with non-consecutive repeating letters ' +
    'of different cases ("Adam")',
    () => {
      expect(isIsogram('Adam')).toBe(false);
    }
  );

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it(
    'should return false for a word starting with repeating letters ' +
    'of different cases ("Oops")',
    () => {
      expect(isIsogram('Oops')).toBe(false);
    }
  );
});
