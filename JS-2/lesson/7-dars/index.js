// let str1 = "ABB"
// let str2 = "BCA"
// function taqosslang(s1, s2) {
//     let obj1 = {}
//     let obj2 = {}
//     for (let s of s1) {
//         if (obj1[s]) obj1[s] +- 1
//         else obj1[s] = 1
//     }
//     // ================
//     for (let s of s2) {
//         if (obj2[s]) obj2[s] +- 1
//         else obj2[s] = 1
//     }
//     let result = true
//     for (let key in obj1) {
//         console.log(key, obj1[key], obj2[key], obj1[key] === obj2[key]);
//         if (obj1[key] !== obj2[key]) {
//             result = false
//             break
//         }
//     }
//     return result
// }

// console.log(taqosslang(str1, str2));

// ============================================

// let str1 = "webbrain academy"
// let str2 = "aca"

// function check(s1, s2) {
//     if (s1 === s1) {
//         console.log("bir biriga mos");
//     } else if (s1.includes(s2)) {
//         console.log("qisman to'gri");
//     } else {
//         console.log("ummuman noto'g'ri");
//     }
// }
// check(str1, str2);

// ============================================

// let str = "webbrain"
// function getCount(s1) {
//     let obj = {}
//     for (let s of str) {
//         if (obj[s]) obj[s] + - 1
//         else obj[s] = 1
//     }
//     return obj
// }
// console.log(getCount(str));

// ============================================

// let str = "Namangan"
// function check(s1) {
//     let obj = {}
//     for (let s of str) {
//         if (obj[s]) obj[s] += 1;
//         else obj[s] = 1
//     }
//     return obj
// }
// console.log(check(str));

// ============================================

// let str = "webbrain academy"
// let n = 5
// console.log(str.slice(0, n));


// let str = "webbrain academy"
// let n = 5
// function truncate(str, n) {
//     console.log(str.slice(0, n));
// }
// truncate(str, n)

// ============================================
let str = "$14651200$$$"
let newStr = ""
for (let s of str) {
    if (!isNaN(s)) newStr += s
}
console.log(Number(newStr));

