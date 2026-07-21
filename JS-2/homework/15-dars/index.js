// let arr = [10, 9, 3, 7, 1, 4, 6, 5, 2, 8]

// let newArr = arr.sort((a, b) => {
//     return b - a
// })
// console.log(newArr);

// let arr = ["Olma", "Uzum", "Nok", "Shaftoli", "Nok"]

// let newArr = arr.sort((a, b) => {
//     return a.localeCompare(b)
// })
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5]

// arr.copyWithin(0, 2, 4)
// console.log(arr);


// =========================================

// let arr = [
//     { name: "Ali", premium: false },
//     { name: "Vali", premium: false },
//     { name: "Sami", premium: true },
//     { name: "Olim", premium: true }
// ];

// let firstPremium = users.find(user => user.premium === true);
// console.log(firstPremium);

// let arr = [
//     { name: "Mouse", price: 250000 },
//     { name: "Monitor", price: 1800000 },
//     { name: "Keyboard", price: 400000 }
// ];

// let expensiveProduct = products.find(item => item.price > 1000000);
// console.log(expensiveProduct);

// let arr = [
//     { id: 1, status: "success" },
//     { id: 2, status: "success" },
//     { id: 3, status: "error" },
//     { id: 4, status: "pending" }
// ];

// let errorIndex = orders.findIndex(order => order.status === "error");
// console.log(errorIndex);

// let arr = [
//     { name: "Ali", ball: 70 },
//     { name: "Vali", ball: 95 },
//     { name: "Sami", ball: 88 }
// ];

// let topStudentIndex = students.findIndex(s => s.ball > 90);
// console.log(topStudentIndex);

// let arr = [
//     { name: "Ali", active: true },
//     { name: "Vali", active: false },
//     { name: "Sami", active: true },
//     { name: "Olim", active: false }
// ];

// let NewArr = arr.findLastIndex((value) => {
//     return value.active === true
// });

// console.log(NewArr);

// let arr = [5, -2, 7, -9, 10];

// let NewArr = arr.findLastIndex((value) => {
//     return value < 0;
// });

// console.log(NewArr);

// let arr = [
//     { name: "Phone", price: 3000000 },
//     { name: "TV", price: 5000000 },
//     { name: "Mouse", price: 200000 }
// ];

// arr.sort((a, b) => {
//     return a.price - b.price;
// });

// console.log(arr);

// let arr = [
//     { name: "Ali", ball: 65 },
//     { name: "Vali", ball: 95 },
//     { name: "Sami", ball: 80 }
// ];

// arr.sort((a, b) => {
//     return b.ball - a.ball;
// });

// console.log(arr);

// let arr = [
//     { name: "Ali", ball: 70 },
//     { name: "Vali", ball: 61 },
//     { name: "Sami", ball: 90 }
// ];

// let Newarr = arr.every((student) => {
//     return student.ball > 60;
// });

// console.log(Newarr);

// let arr = [1, 2, [3, 4], [5, 6]]

// let newArr = arr.flat(Infinity)
// console.log(newArr);

// let arr = [1, [2, [3, 4]], 5]

// let NewArr = arr.flat(Infinity)
// console.log(NewArr);

// let arr = ["Ali", "Vali"];

// let NewArr = arr.flatMap(value => value.split(''));

// console.log(NewArr);

// let arr = [2, 4, 6];
// let NewArr = arr.flatMap(son => [son, son * 2]);

// console.log(NewArr); 

// let arr = [1, 2, 3, 4, 5];
// arr.fill(0);

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.fill(9, 1, 4);

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.copyWithin(3, 0, 2);

// console.log(arr);

let arr = [10, 20, 30, 40, 50];
arr.copyWithin(0, 3);

console.log(arr);// let arr = [10, 9, 3, 7, 1, 4, 6, 5, 2, 8]

// let newArr = arr.sort((a, b) => {
//     return b - a
// })
// console.log(newArr);

// let arr = ["Olma", "Uzum", "Nok", "Shaftoli", "Nok"]

// let newArr = arr.sort((a, b) => {
//     return a.localeCompare(b)
// })
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5]

// arr.copyWithin(0, 2, 4)
// console.log(arr);


// =========================================

// let arr = [
//     { name: "Ali", premium: false },
//     { name: "Vali", premium: false },
//     { name: "Sami", premium: true },
//     { name: "Olim", premium: true }
// ];

// let firstPremium = users.find(user => user.premium === true);
// console.log(firstPremium);

// let arr = [
//     { name: "Mouse", price: 250000 },
//     { name: "Monitor", price: 1800000 },
//     { name: "Keyboard", price: 400000 }
// ];

// let expensiveProduct = products.find(item => item.price > 1000000);
// console.log(expensiveProduct);

// let arr = [
//     { id: 1, status: "success" },
//     { id: 2, status: "success" },
//     { id: 3, status: "error" },
//     { id: 4, status: "pending" }
// ];

// let errorIndex = orders.findIndex(order => order.status === "error");
// console.log(errorIndex);

// let arr = [
//     { name: "Ali", ball: 70 },
//     { name: "Vali", ball: 95 },
//     { name: "Sami", ball: 88 }
// ];

// let topStudentIndex = students.findIndex(s => s.ball > 90);
// console.log(topStudentIndex);

// let arr = [
//     { name: "Ali", active: true },
//     { name: "Vali", active: false },
//     { name: "Sami", active: true },
//     { name: "Olim", active: false }
// ];

// let NewArr = arr.findLastIndex((value) => {
//     return value.active === true
// });

// console.log(NewArr);

// let arr = [5, -2, 7, -9, 10];

// let NewArr = arr.findLastIndex((value) => {
//     return value < 0;
// });

// console.log(NewArr);

// let arr = [
//     { name: "Phone", price: 3000000 },
//     { name: "TV", price: 5000000 },
//     { name: "Mouse", price: 200000 }
// ];

// arr.sort((a, b) => {
//     return a.price - b.price;
// });

// console.log(arr);

// let arr = [
//     { name: "Ali", ball: 65 },
//     { name: "Vali", ball: 95 },
//     { name: "Sami", ball: 80 }
// ];

// arr.sort((a, b) => {
//     return b.ball - a.ball;
// });

// console.log(arr);

// let arr = [
//     { name: "Ali", ball: 70 },
//     { name: "Vali", ball: 61 },
//     { name: "Sami", ball: 90 }
// ];

// let Newarr = arr.every((student) => {
//     return student.ball > 60;
// });

// console.log(Newarr);

// let arr = [1, 2, [3, 4], [5, 6]]

// let newArr = arr.flat(Infinity)
// console.log(newArr);

// let arr = [1, [2, [3, 4]], 5]

// let NewArr = arr.flat(Infinity)
// console.log(NewArr);

// let arr = ["Ali", "Vali"];

// let NewArr = arr.flatMap(value => value.split(''));

// console.log(NewArr);

// let arr = [2, 4, 6];
// let NewArr = arr.flatMap(son => [son, son * 2]);

// console.log(NewArr); 

// let arr = [1, 2, 3, 4, 5];
// arr.fill(0);

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.fill(9, 1, 4);

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.copyWithin(3, 0, 2);

// console.log(arr);

// let arr = [10, 20, 30, 40, 50];
// arr.copyWithin(0, 3);

// console.log(arr);