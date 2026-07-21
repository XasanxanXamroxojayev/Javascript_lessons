// let data = [
//     {id: 1, ism: "Murodxon", yosh: 15},
//     {id: 2, ism: "Xasanxon", yosh: 16},
//     {id: 3, ism: "Mustafo", yosh: 13},
//     {id: 4, ism: "Sarvarbek", yosh: 15},
//     {id: 5, ism: "Olimjon", yosh: 13},
//     {id: 6, ism: "Ikromxon", yosh: 14},
//     {id: 7, ism: "Abubakr", yosh: 13},
//     {id: 8, ism: "Eshmat", yosh: 12},
// ]

// let newArr = data.filter((obj) => obj.ism.length >= 7 && obj.yosh >= 15)
// console.log(newArr);



// let data = [
//     { id: 1, ism: "Murodxon", yosh: 15 },
//     { id: 2, ism: "Xasanxon", yosh: 16 },
//     { id: 3, ism: "Mustafo", yosh: 13 },
//     { id: 4, ism: "Sarvarbek", yosh: 15 },
//     { id: 5, ism: "Olimjon", yosh: 13 },
//     { id: 6, ism: "Ikromxon", yosh: 14 },
//     { id: 7, ism: "Abubakr", yosh: 13 },
//     { id: 8, ism: "Eshmat", yosh: 12 },
// ]

// let newArr = data.map((obj) => {
//     let qoldii = 100 - obj.yosh
//     if (obj.yosh % 2) {
//         obj.foiz = `${obj.yosh} %`
//         obj.qoldiq = `${qoldii} %`
//     }

//     return obj;
// })
// console.log(newArr);



// let data = [
//     { id: 1, ism: "Murodxon", yosh: 15 },
//     { id: 2, ism: "Xasanxon", yosh: 16 },
//     { id: 3, ism: "Mustafo", yosh: 13 },
//     { id: 4, ism: "Sarvarbek", yosh: 15 },
//     { id: 5, ism: "Olimjon", yosh: 13 },
//     { id: 6, ism: "Ikromxon", yosh: 14 },
//     { id: 7, ism: "Abubakr", yosh: 13 },
//     { id: 8, ism: "Eshmat", yosh: 12 },
// ]


// let newArr = data.map((obj) => {
//     let summa = 0
//     for (let value of obj.ism){
//        summa += obj.ism.charCodeAt()
//     }
//     summa % 2 ? obj.status = true : obj.status = false
//     return obj
// })
// console.log(newArr);
