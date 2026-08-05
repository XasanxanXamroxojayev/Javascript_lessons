// let obj = {
//     id: 1,
//     ism: "Eshmat"
// }
// Object.defineProperty(obj, "id", { writable: false })

// console.log(Object.getOwnPropertyDescriptor(obj, "ism"));
// console.log(Object.getOwnPropertyDescriptor(obj, "id"));

// let cloneObj = Object.getOwnPropertyDescriptors(obj)
// console.log(cloneObj);

// Object.defineProperty(obj, "ism", { writable: false })
// obj.ism = "Toshmat"
// console.log(Object.getOwnPropertyDescriptor(obj, "ism"));

// obj.id = 2
// console.log(obj);

// let obj = {
//     id: 1,
//     ism: "Eshmat"
// }
// Object.defineProperty(obj, "ism", { enumerable: false })
// Object.defineProperty(obj, "ism", { configurable: false })
// delete obj.ism

// for (let key in obj) {
//     console.log(key, obj[key]);
// }

// console.log(obj);
// console.log(Object.values(obj));
// console.log(Object.keys(obj));


// let obj = {
//     id: 1,
//     ism: "Eshmat"
// }

// console.log(Object.getOwnPropertyDescriptor(obj, "ism"));
// Object.defineProperty(obj, "ism", { writable: false })
// obj.ism = "Vali"
// Object.defineProperty(obj, "ism", { value: "Toshmat" })
// console.log(obj);


// Object.defineProperties(obj, {
//     id: { writable: false },
//     ism: { configurable: false },
// })
// obj.id = 2
// delete obj.ism
// console.log(obj);


// =================================================



// let obj = {
//     id: 1,
//     ism: "Eshmat"
// }

// Object.preventExtensions(obj)
// obj.yosh = 20
// obj["yosh"] = 22
// console.log(obj);

// console.log(Object.isExtensible(obj));

// if (Object.isExtensible(obj)) {
//     obj.yosh = 20
// } else {
//     obj = {...obj, yosh: 20}
// }
// console.log(obj);

// Object.seal(obj)
// obj.yosh = 20
// delete obj.ism
// console.log(obj);

// console.log(Object.isSealed(obj));


// Object.freeze(obj)
// obj.yosh = 20
// obj.ism = "Vali"
// delete obj.id
// console.log(Object.isFrozen(obj));


// =============================

// let obj = {
//     id: 1,
//     ism: "ali",
//     yosh: 10,
//     get getSerAction() {
//         return obj.ism
//     },
//     set getSerAction(param) {
//         this.ism = param
//     },
// }

// obj.getSerAction = "Uxlamanglar"
// console.log(obj.getSerAction);

