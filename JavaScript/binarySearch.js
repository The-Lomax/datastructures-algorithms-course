const cl = require('./countries.js')

function binarySearch(arr, itm) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === itm) return mid;
        else if (arr[mid] < itm) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// driver code
console.log(binarySearch([1,2,3,4,5],3));