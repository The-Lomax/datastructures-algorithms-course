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
// let testData = [-4, -3, -2, -1, 0, 1, 2, 3, 5]
// console.log(sumZero(testData))


// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: Implement a function called counUniqueValues, which accepts a sorted array 
// and counts the unique values in the array. There can be negative numbers but it will be always sorted

const countUniqueValues = (arr) => {
    // assign pointer
    let i = 0;

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
let testData = [1,1,1,2,3,3,4,4,4,6,6,7,8,9,9,11]
console.log(countUniqueValues(testData))