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