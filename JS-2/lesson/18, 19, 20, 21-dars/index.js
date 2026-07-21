// let data = [
//     {
//         id: 1,
//         name: "Murodxon",
//         surname: "Sobitxonov",
//         age: 15,
//     },
//     {
//         id: 2,
//         name: "Abdug'ani",
//         surname: "Mutalibov",
//         age: 17,
//     },
//     {
//         id: 3,
//         name: "Otabek",
//         surname: "Asqaraliyev",
//         age: 17,
//     },
//     {
//         id: 4,
//         name: "Sarvar",
//         surname: "Hakimjonov",
//         age: 15,
//     },
//     {
//         id: 5,
//         name: "Xasanxon",
//         surname: "Hamroxo'jayev",
//         age: 16,
//     },
//     {
//         id: 6,
//         name: "Azizxon",
//         surname: "Azizxonnov",
//         age: 17,
//     },

// ];
// const addUser = (user) => {
//     user.id = data.length + 1;
//     data.push(user);
//     return data
// }
// addUser({ name: "Eshmat", surname: "Toshmat", age: 20 })
// addUser({ name: "Ali", surname: "Valiyev", age: 21 })



// Read

// const readData = (param) => {
//     data.sort((a, b) => {
//         return a[param].localeCompare(b[param])
//     })
// }
// readData("name")
// console.log(data);

// readData("surname")
// console.log(data);


// readData("age")
// console.log(data);

// const readData2 = (param) => {
//     return data.filter((obj) => obj.surname.endsWith(param))
// }
// console.log(readData2("ev"));


// const readData2 = (param) => {
//     return data.filter((obj) => obj.age % 2)
// }
// console.log(readData2());


// const readData2 = (param) => {
//     return data.filter((obj) => obj.name.length > param)
// }
// console.log(readData2(6));



// const updateAction = (id, newName, newAge, newTel) => {
//     data = data.map((obj) => {
//         if (obj.id === id) {
//             obj.name = newName
//             obj.age = newAge
//             obj.tel = newTel
//         }
//         return obj
//     })
// }
// updateAction(4, "Sarvarbek", 20, "+998 11 222 33 44")
// console.log(data);



// const deleteAction = (id) => {
//     data = data.filter((obj) => {
//         if(obj.id !== id) return obj
//     })
// }
// deleteAction(4)
// deleteAction(5)
// console.log(data);


// ===========================================================
// ===========================================================
// ===========================================================
// ===========================================================



// let arr = [
//     {id: 1, name: "Ali", department: "IT", salary: 3000, ishlayaptimi: false},
//     {id: 2, name: "Vali", department: "HR", salary: 2000, ishlayaptimi: true},
//     {id: 3, name: "Sami", department: "IT", salary: 2500, ishlayaptimi: false},
//     {id: 4, name: "Olim", department: "SMM", salary: 4000, ishlayaptimi: true},
// ]

// let data = { name: "Xasan", department: "Front end", salary: 999999999, ishlayaptimi: false}
// let addUser = (user) => {
//     user.id = arr.length + 1
//     arr.push(user)
// }
// addUser(data)



// function del(id) {
//     arr = arr.filter((obj) => {
//         if(obj.id !== id) return obj
//     })
// }
// del(3)
// console.log(arr);



// let people = [
//     { id: 1, firstName: "Eshmat", lastName: "Toshmatov", age: 20, status: "Talaba" },
//     { id: 2, firstName: "Gulmat", lastName: "Surmatov", age: 17, status: "O'quvchi" },
//     { id: 3, firstName: "Dilshod", lastName: "Karimov", age: 25, status: "Ishchi" },
//     { id: 4, firstName: "Malika", lastName: "Xoliqova", age: 30, status: "Uqituvchi" },
//     { id: 5, firstName: "Zafar", lastName: "Bozorov", age: 19, status: "Talaba" },
//     { id: 6, firstName: "Umida", lastName: "Raxmatova", age: 22, status: "Tadbirkor" },
//     { id: 7, firstName: "Rustam", lastName: "Ziyodov", age: 35, status: "Dasturchi" },
//     { id: 8, firstName: "Nodira", lastName: "Saidova", age: 28, status: "Muhandis" },
//     { id: 9, firstName: "Javlon", lastName: "Qurbonov", age: 24, status: "Frilanser" },
//     { id: 10, firstName: "Shahnoza", lastName: "Ergasheva", age: 18, status: "O'quvchi" }
// ];


// people.sort((a, b) => a.lastName.localeCompare(b.lastName))
// console.log(people);






// let updateAction = (id, newFirstName) => {
//     people = people.map((obj) => {
//         if (obj.id === id) {
//             obj.firstName = newFirstName
//         }
//         return obj
//     })
// }
// updateAction(7, "Gulbashakar")
// console.log(people);





// people = people.filter((obj) => {
//     if (obj.id !== 4 && obj.id !== 9) {
//         return obj
//     }
// })
// console.log(people);

// let newObj = { id: 5, firstName: "Ali", lastName: "Valiyev", age: 25, status: "Dasturchi" }
// people = people.map((obj) => {
//     if (obj.id === 5) {
//         return newObj
//     } else {
//         return obj
//     }
// })
// console.log(people);




// let filterAction = (param) => {
//     people = people.filter((obj) => obj.lastName.endsWith(param))
// }
// filterAction("va")
// console.log(people);

// =======================================================
// =======================================================
// =======================================================
// =======================================================



// let arr = [
//     { name: "Ali", department: "IT", salary: 3000, },
//     { name: "Vali", department: "HR", salary: 2000, },
//     { name: "Sami", department: "IT", salary: 2500, },
//     { name: "Olim", department: "SMM", salary: 4000, },
// ]

// let newArr = arr.map((obj, index) => {
//     obj.foiz = obj.salary * 100 / 5000 + "%"
//     return obj
// })
// console.log(newArr);



// =======================================================



// let newArr = arr.sort((a, b) => b.salary - a.salary)
// console.log(newArr);



// =======================================================



// let newArr = arr.map((obj, index) => {
//     obj.id = index + 1
//     return obj
// })
// console.log(newArr);


// =======================================================


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr.forEach((value) => {
//     console.log(value);
// })




// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let summa = 0
// arr.forEach((value) => {
//     summa += value
// })
// console.log(summa);



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArr = arr.map((value) => value * 2)
// console.log(newArr);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArr = arr.map((value) => !(value % 2) ? value * 2 : value)
// console.log(newArr);



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArr = arr.filter((value) => !(value % 2) && value)
// console.log(newArr);



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArr = arr.filter((value) => value % 2).map((value) => value * value)
console.log(newArr);




