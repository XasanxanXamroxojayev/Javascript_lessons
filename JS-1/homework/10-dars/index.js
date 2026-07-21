// ==============================================
// ==============================================
// function tekshir() {
//     for (let i = 1; i <= 50; i++) {
//         if (!(i % 4) && i % 8 !== 0) {
//             console.log(i);
//         }
//     }
// }
// tekshir();

// ==============================================

// function tekshir() {
//     let count = 0
//     for (let num = 1; num <= 50; num++) {
//         if (!(num % 4) && num % 8) {
//             count++
//         }
//     }
//     return count
// }

// let result = tekshir()
// console.log(result);

// ==============================================
// ==============================================


// let hisob = function () {
//     let summa = 0
//     for (let i = 1; i <= 30; i++){
//         if (i % 2) {
//             summa += i * i
//         }
//     }
//     console.log(summa);

// }
// hisob()

// ==============================================

// let hisob = function () {
//     let summa = 0
//     let k = 1
//     while (k <= 30) {
//         if (k % 2) summa += k ** 2
//         k++
//     }
//     return summa
// }
// console.log(hisob());


// ==============================================
// ==============================================

// let oraliq = (a, b) => {
//     for (let i = a; i <= b; i++){
//         if (!(i % 7)) {
//             console.log(i);
//         } else {
//             console.log("Topilmadi");
//         }
//     }
// }
// oraliq(5, 25)

// ==============================================

// let oraliq = (start, end) => {
//     let bolinmaydimi = true
//     for (let j = start; j <= end; j++){
//         if (!(j % 7)) {
//             bolinmaydimi = false
//             console.log(j);
//         }
//     }
//     if(bolinmaydimi) console.log("Topilmadi");
// }
// oraliq(5, 25)

// ==============================================
// ==============================================

// function hisobla(two) {

//     switch (two) {
//         case (two > 0):
//             console.log("Positive");
//             break;

//         case (two < 0):
//             console.log("Negative");
//             break;

//         default:
//             console.log("Zero");
//             break;
//     }
// }
// hisobla(2)

// ==============================================

// let aniqlash = (num) => {

//     switch (true) {
//         case num > 0:
//             console.log("Positive");
//             break;

//         case num < 0:
//             console.log("Negative");
//             break;

//         default:
//             console.log("Zero");
//             break;
//     }
// }
// aniqlash(20)
// aniqlash(-1)
// aniqlash(0)

// ==============================================
// ==============================================

// function hisoblaYigindi(n) {
//     let sum = 0
//     for (let i = 1; i <= n; i++) {
//         if (!(i % 2)) {
//             sum += i;
//         } else {
//         }
//     }
//     console.log(sum);
// }
// hisoblaYigindi(13)

// ==============================================

// function hisoblaYigindi(n) {
//     let summa = 0
//     for (let i = 1; i <= n; i++){
//         if (i % 2) summa -= i;
//         else summa += i;
//     }
//     return summa
// }
// console.log(hisoblaYigindi(15));



