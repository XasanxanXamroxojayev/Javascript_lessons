// let scores = [78, 90, 65, 82, 71];

// let newArr = scores.every((n) => n > 60)
// console.log(newArr);






// let passwords = ["abc12345", "hello2025", "jsmaster1", "frontend"];

// let newArr = passwords.every((str) => {
//     let arr = str.split("")
//     let isCheck = arr.some((v)=> Number.isInteger(+v))
//     if (str.length >= 8 && isCheck) return str
// })
// console.log(newArr);







// let scores = [65, 72, 84, 100, 91];

// let newArr = scores.some((n) => n === 100)
// console.log(newArr);






// let arr = [1, [2, [3, [4, 5]]], 6];
// console.log(arr.flat(Infinity));





// let words = ["olma", "level", "anor", "banan"];

// let palindrom = words.some((value) => {
//     let value2 = value.split("").reverse().join("")
//     if(value === value2) return value
// })
// console.log(palindrom);






// let arr = [[1, 2], [3, 4], [5, 6], [7, 8]];

// let newArr = arr.flat(Infinity).filter((n) => !(n % 2))
// console.log(newArr);



// let nums = [3, 7, 10];
// let newArr = nums.flatMap((value)=> [value - 1, value, value + 1])
// console.log(newArr)




let sentences = [
    "JavaScript juda kuchli",
    "React juda mashhur",
    "Vue ham qulay"
];

let newArr = sentences.flatMap((str) => str.split(" "))
console.log(newArr);





