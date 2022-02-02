let arr = [
    1338, 4815, 8651, 529, 5827, 2878, 1945, 6955, 2813, 994, 
    4808, 6382, 8361, 1640, 9105, 4914, 5588, 2728, 1169, 3548, 
    3433, 4692, 9653, 1453, 5047, 9493, 1763, 1039, 8793, 3111, 
    3155, 372, 1753, 9877, 9572, 6111, 9156, 1668, 8235, 1051, 5092, 
    588, 1746, 1974, 957, 7845, 8591, 9245, 4077, 4729, 1147, 1926, 
    9752, 9024, 4548, 8566, 4819, 7475, 4792, 9813, 6341, 6369, 2678, 
    7936, 9866, 3626, 4206, 4571, 9454, 5836, 5640, 9700, 1450, 6664, 
    368, 9616, 7561, 9433, 1784, 7458, 2197, 4319, 2781, 6154, 3141, 8950, 
    6168, 6033, 433, 5652, 5400, 7245, 4713, 2865, 3641, 702, 7634, 896, 5, 8127
]

let arr2 = [8,1,3,4,5,7,9]

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// ES2015
const oneLineSwap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Optimized with no swaps tracking
function bubbleSort(arr) {
    let j = arr.length;
    let swapped = false;
    while (j > 0) {
        swapped = false;
        for (let i = 1; i < j; i++) {
            console.log("Comparing: " + arr[i - 1] + " with " + arr[i])
            if (arr[i] < arr[i - 1]) {
                // swap the elements
                // swap(arr, i, i - 1);
                oneLineSwap(arr, i, i - 1);
                swapped = true;
            }
        }
        if (!swapped) {
            return arr;
        }
        j--;
    }

    return arr;
}

console.log("BubbleSort: ", bubbleSort(arr2));