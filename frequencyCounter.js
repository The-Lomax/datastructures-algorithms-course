// Task: check if two arrays are the same. They are same if each value of array1 has its square in array2

const same = (arr1, arr2) => {
    // exit function if arrays are different lengths
    if (arr1.length != arr2.length) {
        return false;
    }

    // create objects to store frequencies
    let freq1 = {};
    let freq2 = {};

    // iterate over first array and count frequencies of items. Complexity: O(n)
    for (let i of arr1) {
        freq1[i] = ++freq1[i] || 1;
    }

    // iterate over second array and count frequencies of items. Complexity: O(n)
    for (let i of arr2) {
        freq2[i] = ++freq2[i] || 1;
    }
    
    // check if squared key of first array exists in the second array, and if so, if they are the same value.
    // return false if either condition not met, true if all (key-key squared) pairs are equal.
    // Complexity: O(n), because we loop only through the first object, looking up its key in another object is a static O(1) operation
    for (let key in freq1) {
        if (!(key ** 2 in freq2) || !(freq1[key] == freq2[key**2])) {
            return false;
        }
    }
    return true;
}

// driver code
// let test1 = [1, 4, 2, 2, 5];
// let test2 = [16, 4, 25, 1, 9];
// console.log(same (test1, test2));

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// Task: Take two strings and check if they are anagrams. Two strings are anagrams if one string can form the other by rearranging letters.
// Tip: use frequency counter pattern

const areAnagrams = (str1, str2) => {
    // exit the function if strings aren't equal lengths
    if (str1.length != str2.length) {
        return false;
    }
    // create objects to store frequencies of characters
    let freq1 = {};
    let freq2 = {};

    // iterate over objects to store frequencies
    for (let char of str1) {
        freq1[char] = ++freq1[char] || 1;
    }
    for (let char of str2) {
        freq2[char] = ++freq2[char] || 1;
    }
    
    // iterate over objects to compare their contents
    for (let key in freq1) {
        if (!(key in freq2) || (freq1[key] != freq2[key])) {
            return false;
        }
    }

    // confirm anagram if the invalid conditions haven't met once
    return true;
}
// Overall time complexity: O(3n) -> O(n)


// more optimised solution for anagram
const validAnagram = (str1, str2) => {
    // exit the function if strings aren't equal lengths
    if (str1.length != str2.length) {
        return false;
    }
    // create object to store frequencies of characters
    let freq = {};

    // iterate over string1 to store frequencies
    for (let char of str1) {
        freq[char] = ++freq[char] || 1;
    }

    // iterate over second string to compare content with first string
    for (let char of str2) {
        if (!(char in freq)) {
            return false;
        } else {
            freq[char]--;
        }
    }

    // confirm anagram if the invalid conditions haven't met once
    return true;
}
// Overall time complexity: O(2n) -> O(n)

// test driver code
testData = ["iceman", "cinema"]
console.log(validAnagram(testData[0], testData[1]))