// const products = [
//     { name: "Laptop", price: 1200, quantity: 2, discount: 10 },
//     { name: "Mouse", price: 25, quantity: 4, discount: 0 },
//     { name: "Keyboard", price: 80, quantity: 1, discount: 15 },
//     { name: "Monitor", price: 300, quantity: 2, discount: 5 }
// ];
// let summa = 0
// products.forEach((obj) => {
//     if (obj.discount) {
//         summa = summa + obj.price * obj.quantity - obj.discount
//     }
// });
// console.log(summa);





// const users = [
//     { name: "Ali", age: 22, isActive: true },
//     { name: "Vali", age: 19, isActive: false },
//     { name: "Madina", age: 28, isActive: true },
//     { name: "Sardor", age: 31, isActive: true },
//     { name: "Aziza", age: 25, isActive: false }
// ];


// let activeCount = 0;
// let totalAge = 0;
// let oldestUser = 0;

// users.forEach((obj) => {
//     if (obj.isActive) {
//         activeCount++

//         totalAge += obj.age

//         if (oldestUser === 0 || obj.age > oldestUser) {
//             oldestUser = obj.age
//         }
//     }
// });

// console.log( "Faolar soni", activeCount, "ta");
// console.log( "Ummuniy yosh", totalAge);
// console.log( "Yoshi eng kattasi", oldestUser, "yosh");



// const students = [
//     {
//         firstName: "Ali",
//         lastName: "Karimov",
//         scores: [80, 90, 82]
//     },
//     {
//         firstName: "Madina",
//         lastName: "Rahimova",
//         scores: [65, 60, 70]
//     },
//     {
//         firstName: "Sardor",
//         lastName: "Aliyev",
//         scores: [95, 88, 91]
//     }
// ];

// let newArr = students.map((obj) => {
//     let newObj = {};
//     newObj.fullName = `${obj.firstName} ${obj.lastName}`;
//     newObj.averageScore = +(obj.scores.reduce((acc, cur) => acc + cur, 0) / obj.scores.length).toFixed(2);
//     newObj.status = newObj.averageScore >= 70 ? "Passed" : "Failed";
//     return newObj
// })
// console.log(newArr);









// const products = [
//     { id: 1, title: "Phone", price: 800, discount: 10 },
//     { id: 2, title: "Headphones", price: 120, discount: 15 },
//     { id: 3, title: "Laptop", price: 1500, discount: 20 },
//     { id: 4, title: "Keyboard", price: 90, discount: 5 }
// ];


// let newArr = products.map((obj) => {
//     let newObj = {}

//     newObj.id = obj.id
//     newObj.title = obj.title
//     newObj.finalPrice = obj.price - obj.price * obj.discount / 100
//     if (newObj.finalPrice > 500) {
//         newObj.isExpensive = true
//     } else {
//         newObj.isExpensive = false
//     }
//     return newObj

// })
// console.log(newArr);