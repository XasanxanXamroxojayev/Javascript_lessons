// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, false, true]
// arr.copyWithin(10, 4)
// console.log(arr);



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let summa = arr.reduce((acc, cur) => {
//     return acc * cur
// }, 1)
// console.log(summa);


// let data1 = {}
// let data2 = []

// console.log(typeof data1 === typeof data2);
// console.log(Array.isArray(data1));
// console.log(Array.isArray(data2));


// let str = "Oxford"
// console.log(Array.from(str));



// let arr = Array.of("salom", true, false)
// let arr2 = ["salom", true, false]
// console.log(arr);
// console.log(arr2);



// let arr = ["a", 1, "b", 2, "c", 3, "d", 4]

// let summa = arr.reduce((acc, cur) => {
//     if (typeof cur === "number") {
//        return acc + cur
//     } else {
//         return acc
//     }
// }, 0)
// console.log(summa);




// let arr = "as2da232dha23"

// let summa = Array.from(arr).reduce((acc, cur) => {
//     if (Number.isInteger(+cur)) {
//         return acc + +cur
//     } else {
//         return acc
//     }
// }, 0)
// console.log(summa);

// =================================================


// let people = [
//     { id: 1, name: "Eshmat", age: 20, status: "student" },
//     { id: 2, name: "Toshmat", age: 22, status: "student" },
//     { id: 3, name: "Ali", age: 17, status: "o'quvchi" },
//     { id: 4, name: "Vali", age: 25, status: "student" },
//     { id: 5, name: "Sali", age: 35, status: "ishchi" },
// ];

// let newArr = people.filter((obj) => obj.status === "student")
// console.log(newArr);





// let people = [
//     { id: 1, name: "Eshmat", age: 20, status: "student" },
//     { id: 2, name: "Toshmat", age: 22, status: "student" },
//     { id: 3, name: "Ali", age: 17, status: "o'quvchi" },
//     { id: 4, name: "Vali", age: 25, status: "student" },
//     { id: 5, name: "Sali", age: 35, status: "ishchi" },
// ];

// let newArr = people.sort((a, b) => {
//     return a.name.localeCompare(b.name)
// })
// console.log(newArr);








// let people = [
//     { id: 1, name: "Eshmat", age: 20, status: "student" },
//     { id: 2, name: "Toshmat", age: 22, status: "student" },
//     { id: 3, name: "Ali", age: 17, status: "o'quvchi" },
//     { id: 4, name: "Vali", age: 25, status: "student" },
//     { id: 5, name: "Sali", age: 35, status: "ishchi" },
// ];

// let newArr = people.sort((a, b) => {
//     return a.age - b.age
// })
// console.log(newArr);





let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let newArr = arr.splice(4, 5)
console.log(arr);
console.log(newArr);









// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let summa = arr.reduce((acc, cur) => acc + cur, 0)
// console.log(summa);







// let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

// let summa = arr.flat(Infinity).reduce((acc, cur) => acc * cur, 1)
// console.log(summa);
