const cl = require('./countries.js') // array of countries imported from another file for testing

function linearSearch(arr, itm) {
    for (let el of arr) {
        if (el === itm) {
            return true;
        }
    }
    
    return false;
}
