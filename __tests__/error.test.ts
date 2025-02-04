import { throwErr } from '../src/error';

describe('error', () => {
  describe('throwErr', () => {
    it('should throw Error instance', () => {
      expect(() => throwErr(new Error('error'))).toThrowError('error');
    });
    it('should throw extended Error instance', () => {
      class MyError extends Error {}
      expect(() => throwErr(new MyError('myError'))).toThrowError('myError');
    });
    it('should throw with strings', () => {
      expect(() => throwErr('string error')).toThrowError('string error');
    });
    it('should throw with numbers', () => {
      expect(() => throwErr(1)).toThrowError('1');
    });
    it('should throw with objects', () => {
      expect(() => throwErr({ err: 'something' })).toThrowError(String({}));
    });
    it('should throw with arrays', () => {
      expect(() => throwErr([])).toThrowError(String([]));
    });
  });
});
