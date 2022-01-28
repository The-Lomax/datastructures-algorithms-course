// Task. write a function, which takes two numbers and returns their sum.

// tip: use problemSolvingApproachTips.txt for reference.

// 1. Return a sum of two arguments
// 2. inputs: two numbers: a, b. what about the number constraints? data format bounds? adding more or less numbers than two?
// 3. sum of two numbers, int, float, string?
// 4. input related constraints?
// 5. function: sum, arguments: a, b

const sum = (a, b) => {return a + b}

// driver code
console.log(sum(22, 44))

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------


// Task. Write a function, which takes in a string and returns counts of each character in the string.

// 1. Calculate counts of each character in a string and return the list of characters with counts
// 2. inputs: a string. ignore uppercase. ignore special characters (non alphanum)
// 3. object with list of characters and their counts
// 4. input related constraints?
// 5. function: charCount, argument: str, result: chars

// "aabbcdef" => {a:2, b:2, c:1, d:1, e:1, f:1}
// "" => null
// " " => null
// "Hi there" => {h:2, i:1, t:1, e:2, r:1}

// create object to return at end
// loop for every character and populate object keys:
    // if character exists in keys, increment
    // if character doesn't exist, add value and set 1
    // ignore invalid character
// return object at end

const charCount = (str) => {
    let res = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            res[char] = ++res[char] || 1;
        }
    }
    return res;
}

const isAlphaNumeric = (chr) => {
    let code = chr.charCodeAt(0);
    if (
        !(code > 47 && code < 58) && // 0-9
        !(code > 64 && code < 91) && // A-Z
        !(code > 96 && code < 123)   // a-z
    ) {
        return false;
    }
    return true;
}

// driver code
test = "hello Hi!"
console.log(charCount(test));

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------