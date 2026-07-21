// 1-SAVOL!!!

let developers = [
    {id: 1, name: "Ali", age: 22, projects: 5, isActive: true},
    {id: 2, name: "Vali", age: 28, projects: 12, isActive: true},
    {id: 3, name: "Sami", age: 19, projects: 8, isActive: false},
    {id: 4, name: "Aziza", age: 25, projects: 15, isActive: true},
    {id: 5, name: "Jasur", age: 30, projects: 7, isActive: false},
]

let neAwrr = developers.map((obj) => {
    if (obj.isActive === true && obj.age >= 20 && obj.projects >= 10) {
        return obj.name
    }
}).filter((v)=>v) 
console.log(arr);


// ================================================

// 2-SAVOL!!!


// let user = [
//     { id: 1, username: "ali", isLoggedIn: false },
//     { id: 2, username: "vali", isLoggedIn: false },
//     { id: 3, username: "aziza", isLoggedIn: true },
//     { id: 4, username: "jasur", isLoggedIn: false },
// ]

// user = user.filter((obj) => obj.isLoggedIn === true && obj)
// console.log(user);


// ======================================================

// 3-SAVOL!!!


// let developers = [
//     { id: 1, name: "Ali", age: 22, projects: 5, isActive: true },
//     { id: 2, name: "Vali", age: 28, projects: 12, isActive: true },
//     { id: 3, name: "Sami", age: 19, projects: 8, isActive: false },
//     { id: 4, name: "Aziza", age: 25, projects: 15, isActive: true },
//     { id: 5, name: "Jasur", age: 30, projects: 7, isActive: false },
// ]
// let summa = 0
// developers = developers.map((obj) => {
//     if (true) {
//         summa += obj.projects
//     }
//     return summa
// })
// console.log(summa);


// =============================================================

// 4-SAVOL!!!

// let developers = [
//     { id: 1, name: "Ali", age: 22, projects: 5, isActive: true },
//     { id: 2, name: "Vali", age: 28, projects: 12, isActive: true },
//     { id: 3, name: "Sami", age: 19, projects: 8, isActive: false },
//     { id: 4, name: "Aziza", age: 25, projects: 15, isActive: true },
//     { id: 5, name: "Jasur", age: 30, projects: 7, isActive: false },
// ]

// developers = developers.map((obj) => {
//     if (obj.name.length % 2) {
//         obj.isCheched = true
//     } else obj.isCheched = false
//     return obj
// })
// console.log(developers);


// ================================================================

// 5-SAVOL!!!


// let developers = [
//     { id: 1, name: "Ali", age: 22, projects: 5, isActive: true },
//     { id: 2, name: "Vali", age: 28, projects: 12, isActive: true },
//     { id: 3, name: "Sami", age: 19, projects: 8, isActive: false },
//     { id: 4, name: "Aziza", age: 25, projects: 15, isActive: true },
//     { id: 5, name: "Jasur", age: 30, projects: 7, isActive: false },
// ]

// developers.sort((a, b) => {
//    return a.name.localeCompare(b.name)
// })
// console.log(developers);
