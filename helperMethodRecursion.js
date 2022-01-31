// Example: collectOdds
function collectOddValues(arr) {
    let result = [];

    function helper(hInput) {
        if (hInput.length === 0) {
            return;
        }
        if (hInput[0] % 2 !== 0) {
            result.push(hInput[0]);
        }
        helper(hInput.slice(1));
    }

    helper(arr);

    return result;
}

// driver code
console.log("collectOddValues: ", collectOddValues([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))