let testArr = [
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

const recursionMerge = (arr1, arr2) => {
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;
    return arr1[0] <= arr2[0]
        ? [arr1[0]].concat(recursionMerge(arr1.slice(1), arr2))
        : [arr2[0]].concat(recursionMerge(arr1, arr2.slice(1)));
}

const merge = (arr1, arr2) => {
    let newArr = [];
    let i = 0, j = 0;

    while (i < arr1.length || j < arr2.length) {
        if (arr1[i] && arr2[j]){
            if (arr1[i] < arr2[j]) {
                newArr.push(arr1[i]);
                i++
            }
            else if (arr2[j] < arr1[i]) {
                newArr.push(arr2[j]);
                j++;
            }
            else {
                newArr.push(arr1[i]);
                newArr.push(arr2[j]);
                i++;
                j++;
            }
        }
        else if (arr1[i]) {
            newArr.push(arr1[i]);
            i++;
        }
        else {
            newArr.push(arr2[j]);
            j++;
        }
    }

    return newArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

console.log("MergeSort: ", mergeSort([24, 10, 42, 34, 98, 53, 66, 42]));