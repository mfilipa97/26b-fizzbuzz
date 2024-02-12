function fizzBuzz(start, end) {
    let result = "";
    let fizzCount = 0;
    let buzzCount = 0;
    let fizzBuzzCount = 0;
    let integerCount = 0;

    for (let i = start; i <= end; i++) {
        if (i % 15 === 0) {
            result += "fizzbuzz";
            fizzBuzzCount++;
        } else if (i % 3 === 0) {
            result += "fizz";
            fizzCount++;
        } else if (i % 5 === 0) {
            result += "buzz";
            buzzCount++;
        } else {
            result += i;
            integerCount++;
        }
        if (i !== end) {
            result += " ";
        }
    }

    const report = `${fizzCount}, ${buzzCount}, ${fizzBuzzCount}, ${integerCount}`;
    
    return { result, report };
}

module.exports = { fizzBuzz };
