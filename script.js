//Print odd numbers in an array using Anonmyous & IIFE function.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = numbers.filter(function(num) {
    return num % 2 !== 0;
});

console.log(oddNumbers);

(function() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log("Odd numbers:");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})();


//Convert all the strings to title caps in a string array using anonymous funtion & IIFE function

let stringArray = ["hello", "world", "javascript"];

let titleCaseArray = stringArray.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});

console.log(titleCaseArray);

(function() {
    let strArray = ["apple", "banana", "orange", "grape"];
    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
    }
    console.log(strArray);
})();

//Sum of all numbers in an array using anonymous function & anonymous function.

let num = [1, 2, 3, 4, 5];

let sum = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

console.log("Sum of all numbers:", sum(num));

(function() {
    let numbers = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log("The sum of all numbers:", sum);
})();

// Return all the prime numbers in an array using anonymous & IIFE function

let num1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = num1.filter(function(num1) {
    if (num1 <= 1) return false; // 1 and below are not prime
    if (num1 === 2) return true; // 2 is prime
    for (let i = 2; i <= Math.sqrt(num1); i++) {
        if (num1 % i === 0) {
            return false;
        }
    }
    return true;
});

console.log("Prime numbers in the array:", primeNumbers);

(function() {
    function isPrime(num2) {
        if (num2 <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num2); i++) {
            if (num2 % i === 0) {
                return false;
            }
        }
        return true;
    }

    let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let primeNumbers = [];

    for (let i = 0; i < num2.length; i++) {
        if (isPrime(num2[i])) {
            primeNumbers.push(num2[i]);
        }
    }

    console.log("Prime numbers in the array:", primeNumbers);
})();


//Return all the palindromes in an array using anonymous & IIFE functions.

let array1 = ["level", "hello", "radar", "world", "madam"];

let palindromes = array1.filter(function(str) {
    return str === str.split('').reverse().join('');
});

console.log("Palindromes in the array:", palindromes);

(function() {
    function isPalindrome(str) {
        // Convert the string to lowercase and remove non-alphanumeric characters
        let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        // Reverse the string
        let reversedStr = cleanStr.split('').reverse().join('');
        // Check if the original string is equal to its reverse
        return cleanStr === reversedStr;
    }

    let words = ["radar", "level", "hello", "world", "madam"];
    let palindromes = [];

    for (let i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            palindromes.push(words[i]);
        }
    }

    console.log("Palindromes in the array:", palindromes);
})();

//Return median of two sorted arrays of the same size using anonymous & IIFE functions.

let median = (function(arr1, arr2) {
    let combinedArray = arr1.concat(arr2);
    combinedArray.sort(function(a, b) {
        return a - b;
    });
    let length = combinedArray.length;
    if (length % 2 === 0) {
        // If the length is even, return the average of the middle two elements
        let mid = length / 2;
        return (combinedArray[mid - 1] + combinedArray[mid]) / 2;
    } else {
        // If the length is odd, return the middle element
        return combinedArray[Math.floor(length / 2)];
    }
})([1, 3, 5], [2, 4, 6]);

console.log("Median:", median);

(function() {
    function medianOfSortedArrays(arr1, arr2) {
        let merged = [];
        let n = arr1.length;
        let i = 0;
        let j = 0;

        // Merge the two arrays into one sorted array
        while (i < n && j < n) {
            if (arr1[i] < arr2[j]) {
                merged.push(arr1[i]);
                i++;
            } else {
                merged.push(arr2[j]);
                j++;
            }
        }

        // Handle the remaining elements in arr1, if any
        while (i < n) {
            merged.push(arr1[i]);
            i++;
        }

        // Handle the remaining elements in arr2, if any
        while (j < n) {
            merged.push(arr2[j]);
            j++;
        }

        // Calculate the median of the merged array
        let mid = Math.floor(merged.length / 2);
        if (merged.length % 2 === 0) {
            // If the merged array has an even length, return the average of middle two elements
            return (merged[mid - 1] + merged[mid]) / 2;
        } else {
            // If the merged array has an odd length, return the middle element
            return merged[mid];
        }
    }

    let arr1 = [1, 3, 5];
    let arr2 = [2, 4, 6];

    console.log("Median of the two sorted arrays:", medianOfSortedArrays(arr1, arr2));
})();

//Remove duplicates from an array using anonymous & IIFE functions.

let array = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 9];

let uniqueArray = function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
}(array);

console.log("Array with duplicates removed:", uniqueArray);

(function() {
    function removeDuplicates(arr) {
        // Use Set to store unique elements
        let uniqueArray = Array.from(new Set(arr));
        return uniqueArray;
    }

    let array = [1, 2, 3, 3, 4, 4, 5];
    let uniqueArray = removeDuplicates(array);

    console.log("Array with duplicates removed:", uniqueArray);
})();

//Rotate an array by k times using anonymous & IIFE functions.

let rotateArray = function(array, k) {
    // Calculate the effective rotation count
    let rotations = k % array.length;

    // Perform rotation
    for (let i = 0; i < rotations; i++) {
        // Remove the last element and insert it at the beginning
        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    return array;
};
let arr = [1, 2, 3, 4, 5];
let rotations = 3;
let rotatedArray = rotateArray(arr, rotations);

console.log("Rotated array:", rotatedArray);

(function() {
    function rotateArray(arr, k) {
        // Calculate the effective rotation amount
        k = k % arr.length;
        // Slice the array and concatenate it to itself to perform rotation
        return arr.slice(k).concat(arr.slice(0, k));
    }

    let array = [1, 2, 3, 4, 5];
    let rotations = 2;
    let rotatedArray = rotateArray(array, rotations);

    console.log("Rotated array:", rotatedArray);
})();


//Print odd numbers in an array using arrow function.

const printOddNumbers = (arr) => {
    console.log("Odd numbers:");
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};
const num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printOddNumbers(num3);


//Convert all the strings to title caps in a string array using arrow function.

const convertToTitleCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const convertAllToTitleCase = (arr) => {
    return arr.map(convertToTitleCase);
};

const strings = ["apple", "banana", "orange", "grape"];
const stringsInTitleCase = convertAllToTitleCase(strings);
console.log(stringsInTitleCase);

//Sum of all numbers in an array using arrow function.

const sumOfNumbers = (arr) => {
    return arr.reduce((total, num) => total + num, 0);
};

const num4 = [1, 2, 3, 4, 5];
const summ = sumOfNumbers(num4);
console.log("The sum of all numbers:", summ);

//Return all the prime numbers in an array using arrow function.

const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const getPrimeNumbers = (arr) => {
    return arr.filter(num => isPrime(num));
};

const num5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNum = getPrimeNumbers(num5);
console.log("Prime numbers in the array:", primeNum);


//Return all the palindromes in an array using arrow function.

const isPalindrome = (str) => {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters and convert to lowercase
    const reversedStr = cleanStr.split('').reverse().join(''); // Reverse the string
    return cleanStr === reversedStr; // Check if the original string is equal to its reverse
};

const getPalindrome = (arr) => {
    return arr.filter(word => isPalindrome(word));
};
const words = ["radar", "level", "hello", "world", "madam"];
const palindrome = getPalindrome(words);
console.log("Palindromes in the array:", palindrome);












