// let obj1 = {
//     ism: "Ali",
// }

// let obj3 = {
//     yosh: 20,
// }

// let obj2 = {
//     familiya: "Valiyev",
//     __proto__: obj3,
// }

// obj1.__proto__ = obj2

// console.log(obj1);
// console.log(obj1.familiya);
// console.log(obj1.yosh);




// class Person {
//     _firstName = "Toshmat"

//     constructor(ism, familiya, yosh) {
//         this.firstName = ism
//         this.lastName = familiya
//         this.age = yosh
//     }

//     getName() {
//         return this._firstName
//     }
// }

// let obj = new Person("Ali", "Valiyev", 20)

// console.log(obj.firstName);
// console.log(obj.getName());





// class User {
//     constructor(ism) {
//         this.name = ism
//     }

//     get getName() {
//         return this.name
//     }
//     set getName(param) {
//         if (param.yosh > 15) {
//             this.name = param.ism + " " + this.name
//         } else {
//             this.name = param.ism + " " + "Nega dars qilmayapsiz?"
//         }
//     }
// }

// let user = new User("Nima gap")
// user.getName = { yosh: 10, ism: "Mustafo" }
// console.log(user.getName);

// let user2 = new User("Nima gap")
// user2.getName = { yosh: 18, ism: "Xasanxon" }
// console.log(user2.getName);






// let a = "hi"
// let b = "Say"

// class User {
//     constructor(ism) {
//         this.name = ism
//     }

//     [a + b](param) {
//         return this.name + " " + param
//     }
// }

// let obj = new User("Akmal")
// console.log(obj.hiSay("Nima gap"));








// class Car {
//     constructor(name) {
//         this.name = name
//     }

//     speed() {
//         return this.name
//     }
// }

// class Matiz extends Car {
//     getName() {
//         return this.name
//     }
// }

// let obj = new Matiz("Matiz")
// console.log(obj.getName());










// class Parent {
//     ism = "Salim"
//     constructor() {
//         this.status = "Ha bu Usta"
//     }

//     getStatus() {
//         return this.status
//     }
// }

// class Child extends Parent {
//     ism = "Alim"
//     constructor() {
//         super()
//         this.status = "Quruvchi"
//     }

//     getStatus() {
//         return this.status
//     }
// }

// let obj = new Child()

// console.log(obj.getStatus());
// console.log(obj.ism);
