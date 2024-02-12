const { fizzBuzz } = require("../src/app.js");

describe('fizzBuzz function', () => {
  test('Returns expected output for number range', () => {
    const { result } = fizzBuzz(1, 20);
    expect(result).toBe("1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz");
  });

  test('should count occurrences of fizz, buzz, fizzbuzz, and integers', () => {
    const { result } = fizzBuzz(1, 20);
    expect(result.split(' ').filter(x => x === 'fizz').length).toBe(5); 
    expect(result.split(' ').filter(x => x === 'buzz').length).toBe(3); 
    expect(result.split(' ').filter(x => x === 'fizzbuzz').length).toBe(1); 
    expect(result.split(' ').filter(x => !isNaN(parseInt(x))).length).toBe(11); 
  });

  test('should handle negative ranges', () => {
    const { result } = fizzBuzz(-5, 5);
    expect(result).toBe("buzz -4 fizz -2 -1 fizzbuzz 1 2 fizz 4 buzz");
  });
});
