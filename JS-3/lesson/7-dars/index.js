// let arr = [1, 2, "3", 4, 5, "6", "7", "8", 9]

// let sum = 0
// function misol(data) {
//     for (let i = 0; i < data.length; i++){
//         if (typeof data[i] === "string") return misol(data.slice(i + 1))
//         sum += data[i]
//     }
// }
// misol(arr)
// console.log(sum);










// let str = "16dts63bc94hs826vjf39d939"

// let sum = 0
// function getSum(value) {
//     for (let i = 0; i < value.length; i++) {
//         if (isNaN(value[i])) return getSum(value.slice(i + 1))
//         sum += +value[i]
//     }
// }
// getSum(str)
// console.log(sum);











// let code = [99, 97, 95, 94, 93, 91, 90, 88, 87, 78, 77, 33, 50, 20]
// let count = 0

// const createPhoneNumber = () => {
//     let code1 = parseInt(Math.random() * 10)
//     let code2 = parseInt(Math.random() * 10)

//     if (!code.includes(+`${code1}${code2}`)) {
//         count++
//         return createPhoneNumber()
//     }

//     let a = parseInt(Math.random() * 10)
//     let b = parseInt(Math.random() * 10)
//     let c = parseInt(Math.random() * 10)

//     let d = parseInt(Math.random() * 10)
//     let e = parseInt(Math.random() * 10)

//     let f = parseInt(Math.random() * 10)
//     let g = parseInt(Math.random() * 10)

//     console.log(count);
//     return `+998 ${code1}${code2} ${a}${b}${c} ${d}${e} ${f}${g}`
// }
// console.log(createPhoneNumber());









// let webbrain = {
//     frontend: [
//         { course: "react", price: 120 },
//         { course: "vue", price: 110 },
//         { course: "angular", price: 100 },
//     ],
//     backend: [
//         { course: "java", price: 120 },
//         { course: "php", price: 110 },
//         { course: "nodejs", price: 100 },
//     ],
//     mobile: {
//         android: [
//             { course: "android", price: 120 },
//             { course: "flutter", price: 110 },
//         ],
//         ios: [
//             { course: "ios", price: 120 },
//             { course: "flutter", price: 110 },
//         ]
//     }
// }


// let sum = 0
// function getSum(obj) {
//     for (let key in obj) {
//         let value = obj[key]
//         if (!Array.isArray(value)) {
//             return getSum(value)
//         }
//         sum += value.reduce((acc, cur) => acc + cur.price, 0)
//     }
// }
// getSum(webbrain)
// console.log(sum);

