// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // reduce("callBack", "initialValue")

// let newValue = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0)
// console.log(newValue);





// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let summa = arr.reduce((acc, cur)=>acc + cur, 0)
// let kopaytma = arr.reduce((acc, cur) => acc * cur, 1)
// console.log(summa);
// console.log(kopaytma);




// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let summa = arr.reduce((acc, cur) => (cur % 2 ? acc + cur : acc), 0)
// console.log(summa);



// let arr = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
// ]

// let newValue = arr.reduce((a, c) => {
//     if (c % 3 === 0 || c % 5 === 0) {
//        return a + c
//     } else {
//         return a
//     }
// }, 0)
// console.log(newValue);




// let newValue = arr.reduce((a, c) => c % 3 === 0 || c % 5 === 0 ? a + c : a, 0)
// console.log(newValue);





// let arr = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
// ]
// let newArr = arr.reduce((a, c) => {
//     if (c >= 10 && c % 2) {
//         return a + c
//     } else {
//         return a
//     }
// }, 0)
// console.log(newArr);


// let arr = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
// ]
// let newArr = arr.reduce((a, c) => c >= 10 && c % 2 ? a + c : a ,0)
// console.log(newArr);
