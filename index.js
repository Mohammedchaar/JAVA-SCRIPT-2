// String Manipulation Functions:

// reverse string
function reverseString(str) {
    let string = " ";
    for (let i = str.length-1; i>= 0; i--){
string+= str[i];
    }
    return string;
}
console.log(reverseString('hello'))

// count character

let str = "Hello World!";
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters(str)); 

// capitulazing first letter

let sentence = "life hides its essence deeply in you.";
function capitalizeWords(sentence) {
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
}

console.log(capitalizeWords(sentence)); 

// Array Functions:

// Find Maximum and Minimum
// max

let numbers = [3, 1, 8, 4, 5, 2];
function findMax(arr) {
    if (arr.length === 0) {
        return null; 
    }

    let max = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }

    return max;
}

console.log("Maximum value:", findMax(numbers)); 

// min

let grades = [3, 1, 8, 4, 5, 2];
function findMin(arr) {
    if (arr.length === 0) {
        return null; 
    }

    let min = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log("Minimum value:", findMin(numbers)); 

// Sum of Array

let arr1 = [1, 2, 3, 4, 5];
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


console.log(sumArray(arr1)); 

// Filter Array

let arr0 = ['apple', 'banana', 'kiwi', 'orange', 'grape', 'fig'];
function filterArray(arr0, condition) {
    return arr0.filter(condition);
}
let filteredArr0 = filterArray(arr0, function(str) {
    return str.length <= 3; 
});

console.log(filteredArr0); 

// Mathematical Functions:

// Factorial

function factorial(num) {

    if (num < 0) {
        return "Does not exist.";
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}
console.log(factorial(5)); 
console.log(factorial(0));  
console.log(factorial(-3)); 

// Prime Number 


function isPrime(number) {
    
    if (number < 2) {
        return false;
    } else if (number > 2) {
        return true;
    }
}

console.log(isPrime(7)); 
console.log(isPrime(1)); 


// Fibonacci Sequence

function generateFibonacci(numTerms) {
    
    let fibonacciSeq = [];
    
    if (numTerms >= 1) {
        fibonacciSeq.push(0);
    }
    if (numTerms >= 2) {
        fibonacciSeq.push(1);
    }

    
    for (let i = 2; i < numTerms; i++) {
        let nextFibonacci = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
        fibonacciSeq.push(nextFibonacci);
    }

    return fibonacciSeq;
}

let numTerms = 10; 
let fibonacciSequence = generateFibonacci(numTerms);
console.log(`Fibonacci sequence up to ${numTerms} terms:`, fibonacciSequence);