import { val, add } from '../src/index';

describe('test setup', () => {
    it('should work', () => {
        expect(val).toBe(10);
    })
    it('should add 2 values', () => {
        expect(add(2, 3)).toBe(5)
    })
})