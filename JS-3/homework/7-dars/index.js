// let num = [2, 5, 8, 3, 10, 7]
// let sum = 0                                ✅✅✅
// function xisobla(n) {
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] % 2) return xisobla(n.slice(i + 1))
//         sum += n[i]
//     }
// }
// xisobla(num)
// console.log(sum);
















// let str = "recursion"
// let unliHarf = "a e i o u"               ✅✅✅
// let newStr = ""
// function search(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (!unliHarf.includes(str[i])) return search(str.slice(i + 1))
//         newStr += str[i]
//     }
// }
// search(str)
// console.log(newStr.length);














// let arr = [7, 12, 5, 9, 20]
// let target = 9                                       xxx

// function findNum(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (!(nums[i] === target)) return findNum(nums.slice(i + 1))
//         result = true
//     }
// }
// findNum(arr)
// console.log(result);
