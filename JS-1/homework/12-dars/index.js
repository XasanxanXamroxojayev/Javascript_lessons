// let product = {
//     title: "Laptop",
//     price: 1200,
//     info: {
//       brand: "HP",
//       year: 2023
//     }
// }
  

// let newProduct = structuredClone(product)
// newProduct.price = 1500
// newProduct.info.year = 2024


// for (let kalit in newProduct) {
//     console.log(kalit,":",newProduct[kalit]);
// }

// ===============================
// let product = {
//     title: "Laptop",
//     price: 1200,
//     info: {
//       brand: "HP",
//       year: 2023
//     }
// }
  

// let newProduct = structuredClone(product)
// newProduct.price = 1500
// newProduct.info.year = 2026


// for (let key in newProduct) {
//     if (typeof newProduct[key] === "object") {
//         for (let key2 in newProduct[key]) {
//             console.log(`${key2}: ${newProduct[key] [key2]}`);
//         }
//     } else {
//         console.log(`${key}: ${newProduct[key]}`);
//     }
// }

// ===============================


// let userData = {
//     name: "Ali",
//     age: 25,
//     job:"Developer"
// }
  
// let ism = Object.assign({}, userData)
// ism.davlat = "Uzbekistan"
// ism.status = "active"

// for (let key in ism) {
//     console.log(`${key}: ${ism[key]}`);     ❌❌❌❌
// }

// ==============================