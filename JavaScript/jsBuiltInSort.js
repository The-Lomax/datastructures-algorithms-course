let arr = [14,23,7,3,45,8,4,68,96,45,32]

console.log(arr.sort())

const compare = (a, b) => {
    return a-b
}

console.log(arr.sort(compare))

let arr2 = "the hasty horse jumps over the lazy dog".split(" ")

const lenCompare = (a, b) => {
    return a.length - b.length
}

console.log(arr2.sort(lenCompare))