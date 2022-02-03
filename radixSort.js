// radix sort only works on arrays of integers.

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

function mathGetDigit(number, digit) {
    return Math.floor(Math.abs(number) / Math.pow(10, digit)) % 10;
}

function mathNumDigits(number) {
    if (number >= -9 && number <= 9) return 1;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function getDigit(number, digit) {
    let str = number.toString();
    return Number(str[str.length - digit - 1]) || 0;
}

function numDigits(number) {
    return number.toString().length;
}

function maxDigits(arr) {
    let max = 0;
    for (let el of arr) {
        max = Math.max(max, numDigits(el));
    }
    return max;
}

function radixSort(arr) {
    let max = maxDigits(arr);
    for (let i = 0; i < max; i++) {
        let buckets = Array.from({length: 10}, () => []) // let buckets = [[], [], [], [], [], [], [], [], [], []];
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

console.log(radixSort(testArr))