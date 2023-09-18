// Task: Given a sorted array of integers, write a function called search, that accepts
// a value and returns the index, where the value passed to the function is located.
// If the value is not found, return -1

const binarySearch = (arr, itm) => {
    // assign array boundaries
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        // divide array into 2 halves
        let mid = Math.floor((min + max) / 2);

        // move the focus on smaller portions of the array, based on the comparison
        if (arr[mid] < itm) {
            // look at the higher half if the item searched is bigger than middle item
            min = mid + 1;
        }
        else if (arr[mid] > itm) {
            // look at the lower half if the item searched is smaller than middle item
            max = mid - 1;
        }
        else {
            // return position of the item if item is found (same as middle item)
            return mid;
        }
    }

    // return -1 if item is not found
    return -1;
}

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

