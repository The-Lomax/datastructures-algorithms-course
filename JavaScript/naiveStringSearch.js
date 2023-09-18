function stringSearch(str,sub) {
    let count = 0;
    if (sub.length === 0) {
        return 0;
    }
    else if (sub.length === 1) {
        for (let char of str) {
            if (char === sub) count++;
        }
    }
    else {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === sub[0]) {
                for (let j = 1; j < sub.length; j++) {
                    if (!(str[i + j] === sub[j])) {
                        break;
                    }
                    else if (j === sub.length - 1) {
                        count++;
                    }
                }
            }
        }
    }
    return count;
}

// driver code
console.log(stringSearch("the hasty rabbit jumps over the lazy dog while eating oatmeal", "as"))