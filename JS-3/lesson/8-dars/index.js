// Global Scope
// Block Scope
// Func Scope

// let n = 22
// console.log(n);



// {
//     let a = 100
//     console.log(a);
// }

// {
//     let a = 200
//     console.log(a);
// }


// let a = 10
// function example() {
//     let a = 0
//     console.log(a);
// }
// example()




// function decloration
// function expression
// arrow function


// getSum()
// function getSum() {
//     console.log("function decloration");
// }



// getSum()
//  let getSum = function() {
//     console.log("function expression");
// }



// getSum()
//  let getSum = () => {
//     console.log("arrow function");
// }




// console.log(value);
// const value = 10


// console.log(value);
// let value = 10


// console.log(value);
// var value = 10



// Closure

// function getSum() {
//     let a = 10
//     let b = 20
//     return () => {
//         return a + b
//     }
// }
// console.log(getSum()());



// let obj = { id: 1 }

// obj = null

// obj = 10

// console.log(obj)


// =========================



// var ism = "Eshmat"
// var ism = {}
// console.log(ism);

// let, const



// IIFE: Immediately invoked function expression
// (function () {
//     console.log("Salom");
// })()



// NFE: Named Function Expression
// let data = true
// let getSum = function getSum2() {
//     console.log("salom");
//     if (data) {
//         data = false
//         return getSum2()
//     }
// }
// getSum()

// console.log(window)  -  Browser
// console.log(global)  -  Node Terminal
// console.log(globalThis)  -  Node JS



// function User(ism) {
//     this.ism = ism;
// }

// let obj2 = new User("Vali")
// let obj1 = new User("Ali")
// console.log(obj1);
// console.log(obj2);


