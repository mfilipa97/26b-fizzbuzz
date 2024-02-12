function fizzBuzz (start,end){
    let result = "";
    for(let i= start; i<=end; i++){
        if(i % 15 === 0){
            result += "fizzbuzz";
        }
        else if(i % 3 === 0){
            result +="fizz";
        }
        else if(i % 5 === 0){
            result += "buzz"
        }
        else {
            result += i.toString();
        }
        if(i!== end){
            result += " ";
        }
    }

    
    return result;
}

module.exports = { fizzBuzz };

console.log(fizzBuzz(1, 20));