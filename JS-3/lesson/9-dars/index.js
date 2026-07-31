// let count = 1;
// let time = setInterval(() => {
//     let vv = new Date()
//     console.log(`${vv.getHours()}:${vv.getMinutes()}:${vv.getSeconds()}`, count);
//     count++
// }, );

// setTimeout(() => {
//     clearInterval(time)
// }, 11000)




// setTimeout(callBack, time)



// console.log("Start")
// setTimeout(() => {
//     console.log("setTimeout");
// }, 1000)
// console.log("End");




// console.log("Start");
// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }
// console.log("End");


// ========================



// setTimeout(() => {
//     console.log("setTimeout");
// },1000)


// let count = 1

// let interval = setInterval(() => {
//     console.log("SetInterval", count);
//     count++
// },1000)

// setTimeout(() => {
//     clearInterval(interval)
// },6000)



// ===========================

// function Decloration
// function Expression
// Arrow function
// CallBack function
// Recursion function


// function Advanced
// call, apply, bind


// call
// function getData(familiya, yosh) {
//     console.log(this.ism, familiya, yosh);
// }
// getData.call({ ism: "Ali" }, "Valiyev", 100)
// call dan yuborilgan 1-argument Context ga birikadi.
// Context - bu "this" degani


// apply
// function getData(familiya, yosh) {
//     console.log(this.ism, familiya, yosh);
// }
// getData.apply({ ism: "Ali" }, ["Valiyev", 100])


// bind
// function getData(familiya, yosh) {
//     console.log(this.ism, familiya, yosh);
// }
// getData.bind({ ism: "Ali" }, "Valiyev", 100)()