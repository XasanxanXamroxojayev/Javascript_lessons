// let order = [
//     { product: "Laptop", price: 1200, quantity: 2 },
//      { product: "Mouse", price: 25, quantity: 4 },
//      { product: "Keyboard", price: 70, quantity: 3 },
// ]

// let summa = order.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
// console.log(summa);







// let users = [
//     {name: "Ali", age: 20},
//     {name: "Vali", age: 21},
//     {name: "Sami", age: 20},
//     {name: "Olim", age: 22},
// ]

// let result = users.reduce((acc, cur) => {
//     if (acc[cur.age]) acc[cur.age].push(cur)
//     else acc[cur.age] = [cur]
//     return acc
// }, {})
// console.log(result);







// let transaction = [
//     { type: "income", amount: 1000 },
//     { type: "expense", amount: 200 },
//     { type: "income", amount: 500 },
//     { type: "expense", amount: 100 },
// ]

// let summa = transaction.reduce(
//     (acc, cur) => cur.type === "income" ? acc + cur.amount : acc - cur.amount
//     ,0)
// console.log(summa);






// let apiUser = [
//     {id: 1, nema: "Ali", active: true},
//     {id: 2, nema: "Vali", active: false},
//     {id: 3, nema: "Sami", active: true},
// ]

// let newApiUser = apiUser.reduce((acc, cur) => {
//     if (cur.active === true) acc[cur.id] = cur
//     return acc
// }, {})
// console.log(newApiUser);








let arr = [
    {name: "Ali", department: "IT", salary: 3000, ishlayaptimi: false},
    {name: "Vali", department: "HR", salary: 2000, ishlayaptimi: true},
    {name: "Sami", department: "IT", salary: 2500, ishlayaptimi: false},
    {name: "Olim", department: "Finance", salary: 4000, ishlayaptimi: true},
]

let newArr = arr.reduce((acc, cur) => {
    if (cur.ishlayaptimi) acc += cur.salary
    return acc
}, 0)
console.log(newArr);
