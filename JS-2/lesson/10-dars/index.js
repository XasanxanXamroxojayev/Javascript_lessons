// let arr = [1, 2, "3", 4, "5", "6", 7, 8, 9]
// let summa = 0
// for (let value of arr) {
//     summa += +value
// }
// console.log(summa);




// let arr = [1, 2, 3, 4, 5, 6]
// let newArr = arr.splice(0, 3)

// let result = newArr.reverse().concat(arr.reverse())
// console.log(result);




// let str = "Algoritm - 2016 va Oxford - 2023"
// let summa = 0
// for (let s of str) {
//     if (!isNaN(s)) {
//         summa += +s
//     }
// }
// console.log(summa);

let nums = "123456789"

let arr = nums.split("").reverse()
let result = []
for (let value of arr) {
    result.push(+value)
}
console.log(result);



