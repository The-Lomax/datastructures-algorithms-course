// Task: given a sorted (!) array of numbers, find first pair, that adds up to zero

const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// driver code
let testData = [-4, -3, -2, -1, 0, 1, 2, 3, 5]
console.log("sumZero: ", sumZero(testData))


// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: Implement a function called counUniqueValues, which accepts a sorted array 
// and counts the unique values in the array. There can be negative numbers but it will be always sorted

const countUniqueValues = (arr) => {
    // assign pointer
    let i = 0;

    // exit early if array short
    if (arr.length < 2) {
        return arr.length;
    }

    // iterate over the array and build the unique values
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
} // Overall time complexity: O(n), space complexity: O(1)

// driver code
let testArr = [1,1,1,2,3,3,4,4,4,6,6,7,8,9,9,11]
console.log("countUniqueValues: ", countUniqueValues(testArr))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: Write a function called averagePair. Given a sorted array of integers and a target average
// determine if there's a pair of values in the array where the average of the pair equals
// the target average.

const averagePair = (arr, avg) => {
    if (arr.length < 2) {
        return false;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let tempAvg = (arr[left] + arr[right]) / 2;
        if (tempAvg === avg) {
            return true;
        } else if (tempAvg > avg) {
            right--;
        } else {
            left++;
        }
    }

    return false;
}

// driver code
console.log("averagePair: ", averagePair([1,2,3,4,5,6,7,8,9], 12))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: Write a function called isSubsequence, which takes in two strings, and checks whether
// the characters in the first string are a substring of the second string, without changing
// their order

function isSubsequence(str1, str2) {
    if (str1.length === 0 || str2.length === 0) {
        return false;
    }
    
    let i = 0;
    
    for (let j = 0; j < str2.length; j++) {
        if (str2[j] === str1[i]) {
            i++;
            if (i >= str1.length){
                return true;
            }
        }
    }
    return false;
}

// driver code
console.log("isSubsequence: ", isSubsequence("", "abracadabra"))