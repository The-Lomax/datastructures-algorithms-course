// Example 1: countdown
const countDown = (n) => {
    if (n <= 0) {
        console.log("Done!");
        return;
    }
    console.log(n);
    n--;
    countDown(n);
}

// driver code
console.log("countdown:")
countDown(10);

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Example 2: sumRange
function sumRange(n) {
    if (n === 1) return 1;
    return n + sumRange(n - 1);
}

// driver code
console.log("sumRange: ", sumRange(10));

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Example 3: factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

//driver code
console.log("factorial: ", factorial(5));

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Example 4: collectOddValues
function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

// driver code
console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10]))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: Write a function called poer which accepts a base and exponent.
// The function should return the power of the base to the exponent.
function power(numBase, numPow) {
    if (numPow === 0) return 1;
    if (numPow === 1) return numBase;
    return numBase * power(numBase, numPow - 1);
}

// driver code
console.log("power: ", power(2, 0))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: Write a function called productOfArray, which takes an array and returns
// product of them all.
function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

// driver code
console.log("productOfArray: ", productOfArray([1,2,3,10]))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: write a function called recursiveRange, which takes a number and
// adds up all the numbers from 0 to that number
function recursiveRange(num) {
    if (num === 0) return num;
    return num + recursiveRange(num - 1);
}

// driver code
console.log("recursiveRange: ", recursiveRange(111))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: write a recursive function called fib, which accepts a number and returns
// the nth number in the Fibonacci sequence.
// Note: Fibonacci numbers are where every number is equal to sum of the previous two numbers.
function fib(n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

// driver code
console.log("fib: ", fib(11))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: write a recursive function to reverse a string
function reverse(str) {
    if (str.length === 1) return str;
    return str[str.length - 1] + reverse(str.substr(0, str.length - 1))
}

// driver code
console.log("reverse: ", reverse("hello"))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: write function to check if a word is a palindrome recursively
function isPalindrome(str) {
    if (str.length <= 1) return true;
    return str[0] === str[str.length - 1] && isPalindrome(str.substr(1, str.length - 2));
}

// driver code
console.log("isPalindrome: ", isPalindrome("tacosocat"))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: write function, which accepts array and callback. The function
// returns true if a single value in the array returns true when passed to the callback
// otherwise false
function isEven(num) {
    if (num % 2 === 0) return true;
    return false;
}

function someRecursive(arr, callback) {
    if (arr.length === 0) return false;
    return callback(arr[0]) || someRecursive(arr.slice(1), callback);
}

// driver code
console.log("someRecursive: ", someRecursive([1,3,5,6,9], isEven))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: write a function that will flatten an array recursively
const flatten = (arr) =>{
    let result = [];
    if(arr.length==0) return result;
    if(Array.isArray(arr[0])){
        result= [...result, ...flatten(arr[0])]
    }else{
        result = [...result,arr[0]];
    }
    return [...result,...flatten(arr.slice(1))]
}

// driver code
console.log("flatten: ", flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: write a function that will capitallise first letters of strings in array
function capitalizeFirst(arr) {
    if (arr.length === 0) return arr;
    arr[0] = arr[0][0].toUpperCase().concat(arr[0].slice(1));
    return [arr[0]].concat(capitalizeFirst(arr.slice(1)));
}

// driver code
console.log("capitalizeFirst: ", capitalizeFirst(['car','taco','banana']))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: write a function that will capitallise first letters of strings in array
function capitalizeWords(arr) {
    if (arr.length === 0) return arr;
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

// driver code
console.log("capitalizeWords: ", capitalizeWords(['car','taco','banana']))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: write a function that will recursively add even numbers in an object which may contain other objects
function nestedEvenSum(obj, result = 0) {
    for (let key in obj) {
        if (obj[key] % 2 === 0) {
            result += obj[key];
        }
        if (typeof (obj[key]) == "object") {
            result += nestedEvenSum(obj[key]);
        }
    }
    return result;
}

// driver code
var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}
  
var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: write a function that will take in an object and turn its numeric values to strings
function stringifyNumbers(obj = null) {
    let tempObj = {...obj};
    // alternatively, cause might not work in browsers:
    // let tempObj = Object.assign({}, obj);

    const helper = (hObj) => {
        for (let key in hObj) {
            if (typeof hObj[key] === "number") {
                hObj[key] = hObj[key].toString();
            }
            else if (typeof hObj[key] === "object") {
                helper(hObj[key]);
            }
        }
        return hObj;
    }

    tempObj = helper(tempObj);

    return tempObj;
}

// driver code
let testObj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log("stringifyNumbers: ", stringifyNumbers(testObj))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: write a function that will take an object and return array of its string contents
function collectStrings(obj) {
    let res = [];

    const helper = (hObj) => {
        for (let key in hObj) {
            if (typeof hObj[key] === "string") {
                res.push(hObj[key]);
            }
            else if (typeof hObj[key] === "object") {
                helper(hObj[key]);
            }
        }
    }

    helper(obj);
    return res;
}

// driver code
const testObj1 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
console.log("collectStrings: ", collectStrings(testObj1))