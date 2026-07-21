// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let summa = 0
// arr.forEach(value => {
//     summa += value
// });
// console.log(summa);



// let newArr = arr.map((value) => {
//     return value * 3
// })
// console.log(newArr);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let summa = 0
// arr.forEach((value) => {
//     if (value % 2 === 0 || value % 3 === 0) {
//          summa += value
//     }
// })
// console.log(summa);



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let newArr = arr.map((value) => {
//     if (value % 2 === 1) {
//         return value *2
//     }
//     return value
// })
// console.log(newArr);




// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let newArr = arr.map((value) => {
//     if (value % 2) {
//         return value + 1
//     }
//     return value - 1
// })
// console.log(newArr);






let arr = ["Olma", "Mandarin", "Olcha", "Apelsin"]

let newArr = arr.map((value) => value.length > 5 ? value.toUpperCase() : value)
console.log(newArr);
