// Instructions
// Implement factorial, a Fibonacci sequence generator, and a function that sums nested arrays of arbitrary depth — all recursively.
function factorial(number){
    if(number===1){
        return number;
    }
    else{
        return number*factorial(number-1)
    }
}

console.log(factorial(5));

// Fibonacci formula:
// F(n) = F(n - 1) + F(n - 2)
// Each number is the sum of the two previous numbers.
// Base cases: F(0) = 0 and F(1) = 1.

function Fibonacci(number){
    if(number===0){
        return number;
    }
    else if(number===1){
        return number;
    }
    else{
     return Fibonacci(number-1)+Fibonacci(number-2)
    }
}

function nesteArrays(array){
    if(array.length===0){
        return 0 ;
    }
     if  (Array.isArray(array[0])){
        return nesteArrays(array[0])+nesteArrays(array.slice(1))
    }
    else return array[0]+nesteArrays(array.slice(1))
    
}

console.log(nesteArrays([1,[2,3],[4]]))