
// let vs = new Map()

// vs.set("a", 1)
// vs.set("b", 2)
// vs.set("c", 3)
// vs.set("d", 4)
// vs.set("e", 5)
// vs.set("f", 6)
// vs.set("g", 7)

// let sa = new Set()
// vs.forEach((v) => {
//     sa.add(v)
// })
// console.log(Array.from(sa));



// let kara = 1
// function getsum(v) {
//     if (v) {
//         kara *= v
//         return getsum(v - 1)
//     }
//     console.log(kara);
// }
// getsum(6)



// let obj = new Map()

// obj.set("ism", "Oxford")
// obj.set("yosh", 2)

// console.log(obj.get("ism"), obj.get("yosh"));
// console.log(obj.has("ism"));

// if (obj.has("status")) {
//     console.log(obj.get("status"));
// } else {
//     console.log("status degan kalit mavjud emas");
// }

// console.log(obj.size);
// obj.delete("ism")
// console.log(obj.has("ism"));
// obj.clear()
// console.log(obj);


// let obj = {
//     ism: "Xasan",
//     yosh: 16,
// }

// console.log("status" in obj);
// delete obj.ism
// console.log(obj);




// let mapObj = new Map()

// mapObj.set("ism", "Ali")
// mapObj.set("yosh", 20)
// mapObj.set("tel_nomer", "2328732")

// mapObj.forEach((value, key, o) => {
//     console.log(`Kalit: ${key}, Qiymat: ${value}`);
// })

// console.log(Object.fromEntries(mapObj));




// let setArr = new Set("Oxford")
// console.log(setArr);

// let arr = [1, 2, 2, 2, 3, 3, 4, 5, 6, 6, 7]
// arr = arr.filter((v, i) => !arr.slice(i + 1).includes(v))
// console.log(arr);

// arr = new Set(arr)
// console.log(Array.from(arr));



// let setArr = new Set()
// setArr.add(1)
// setArr.add(2)
// setArr.add(3)
// setArr.add(4)
// setArr.add(5)

// setArr.forEach((value) => {
//     console.log(value);
// })


// ================================

//         Faktarial
// !5 = 1 * 2 * 3 * 4 * 5 = 120
// !4 = 1 * 2 * 3 * 4 = 24
// !6 = 720