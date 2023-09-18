// Task: write a function called maxSubarraySum, which accepts an array
// of integers, and a number called n. The function should calculate 
// the maximum sum of n consecutive elements in the array.

const maxSubarraySum = (arr, n) => {
    // exit early if not enough elements in array
    if (arr.length < n) {
        return null;
    }

    // create storage variables
    let max = 0;
    let temp = 0;

    // create sliding window
    for (let i = 0; i < n; i++) {
        max += arr[i];
    }

    temp = max;

    // loop over the array moving the window, comparing consecutive sum and updating max if necessary
    for (let i = n; i < arr.length; i++) {
        temp = temp - arr[i - n] + arr[i];
        if (temp > max) {
            max = temp;
        }
    }

    // return result
    return max;
}

// driver code
testData = [1,5,6,7,5,6,8,2,3,1,8,8,4,6,2,69,9,5,4,1,2,5,7,8,5,1,32,6,9,5,23,5,1,23,6,4,8,4,9,5,36,6,5,9,4,9,5,6];
console.log(maxSubarraySum(testData, 4))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: write a function called minSubarrayLen, which accepts an array and a number (both positive).
// Function should return the minimum length of continuous subarray of which the sum is greater than 
// or equal to the integer passed to the function. if there's none, return 0 instead.

function minSubArrayLen(arr, num) {
    // exit early if not enough elements in array
    if (arr.length === 0) {
        return 0;
    }

    // create storage variables
    let i = 0;
    let j = 0;
    let len = 1;
    let min = Infinity;
    let sum = arr[0];
    let found = false;

    // loop over the array moving the window, comparing consecutive sum and updating max if necessary
    while(j < arr.length) {
        if (sum < num) {
            j++;
            sum += arr[j];
            len++;
        }
        else {
            min = Math.min(len, min);
            sum -= arr[i];
            i++;
            len--;
            found = true;
        }
    }

    // return result
    if (!found) {
        return 0;
    }
    return min;
}

// driver code
console.log("minSubArrayLen: ", minSubArrayLen([1,4,16,22,5,7,8,9,10], 39))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: write a function called findLongestSubstring, which accepts a string
// and returns the length of the longest substring with all distinct characters

function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
    // exit early if string short or empty
    if (str.length < 2) {
        return str.length;
    }

    // prepare variables
    let index = {}; // object to store indexes of the characters in the string
    let i = 0;
    let j = 1;
    let len = 1;
    let max = 0;

    // assign initial character indes
    index[str[i]] = i;

    // loop over the array and check characters. If character distinct (aka doesn't have index in object),
    // increase length and add new character to the index. If character found in the object,
    // move the beginning of the string to the next character, reset the object, and start counting again.
    while (j < str.length) {
        if (str[j] in index) {
            i = index[str[j]] + 1;
            j = i + 1;
            len = 1;
            index = {};
            index[str[i]] = i;
        }
        else {
            len = j - i + 1;
            index[str[j]] = j;
            j++;
        }
        // update max length of the substring everytime
        max = Math.max(max, len);
    }

    // return result
    return max;
}

// driver code
console.log("findLongestSubstring: ", findLongestSubstring('thisisawesome'))