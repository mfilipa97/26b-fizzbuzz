function fizzBuzz(start, end) {
    let result = "";
    let fizzCount = 0;
    let buzzCount = 0;
    let fizzBuzzCount = 0;
    let integerCount = 0;
    for(let i = start; i <= end; i++){
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
        if (i !== end) result += " ";
    }
    const outputElement = document.getElementById("output");
    outputElement.textContent = result;
    const reportElement = document.getElementById("report");
    reportElement.textContent = `fizz: ${fizzCount}, buzz: ${buzzCount}, fizzbuzz: ${fizzBuzzCount}, integer: ${integerCount}`;
    document.getElementById("output").style.display = "block";
    document.getElementById("output-placeholder").style.display = "none";
}
function runFizzBuzz() {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    if (!isNaN(start) && !isNaN(end)) fizzBuzz(start, end);
    else alert("Please add numbers");
}

//# sourceMappingURL=index.672d4772.js.map
