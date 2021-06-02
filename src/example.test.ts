// test('This is my first test', () => {
//     expect(1+1).toBe(2);
// } );
import { toCapitalizeFirstLetter } from './example';

test('returns the first letter capitalized', () => {
    expect(toCapitalizeFirstLetter('john')).toBe('John');
    expect(toCapitalizeFirstLetter('')).toBe('');
});