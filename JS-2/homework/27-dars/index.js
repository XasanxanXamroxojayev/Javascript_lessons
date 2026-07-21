// const users = [
//     { name: "Ali", age: 20, score: 85, isActive: true },
//     { name: "Vali", age: 17, score: 95, isActive: true },
//     { name: "Sardor", age: 24, score: 78, isActive: true },
//     { name: "Madina", age: 22, score: 91, isActive: false },
//     { name: "Aziza", age: 19, score: 88, isActive: true }
// ];

// const selectedUsers = users.filter((obj) => obj.age > 18 && obj.isActive && obj.score > 80)
// console.log(selectedUsers);


// =====================================================================



// const products = [
//     { name: "Telefon", price: 1200, discount: 25, inStock: true },
//     { name: "Sichqoncha", price: 150, discount: 15, inStock: true },
//     { name: "Klaviatura", price: 300, discount: 20, inStock: true },
//     { name: "Monitor", price: 450, discount: 30, inStock: false },
//     { name: "Quloqchin", price: 200, discount: 35, inStock: true }
// ];


// const discountedProducts = products.filter((obj) => obj.inStock && obj.discount >= 20 && obj.price < 500)
// console.log(discountedProducts);


// =====================================================================



// const orders = [
//     { id: 1, total: 800, status: "completed", date: "2025-03-10" },
//     { id: 2, total: 300, status: "completed", date: "2025-05-22" },
//     { id: 3, total: 900, status: "pending", date: "2025-04-15" },
//     { id: 4, total: 700, status: "completed", date: "2024-12-30" },
//     { id: 5, total: 650, status: "completed", date: "2025-02-18" }
// ];


// const filteredOrders = orders.filter((obj) => obj.status === "completed" && obj.total > 500 && obj.date > "2025-01-01")
// console.log(filteredOrders);



// =====================================================================



// const students = [
//     {
//         name: "Ali",
//         scores: [65, 78, 88]
//     },
//     {
//         name: "Vali",
//         scores: [91, 84, 76]
//     },
//     {
//         name: "Madina",
//         scores: [89, 87, 86]
//     },
//     {
//         name: "Aziza",
//         scores: [95, 92, 98]
//     }
// ];


// =====================================================================



// const employees = [
//     {
//         name: "Ali",
//         department: "IT",
//         experience: 5,
//         projects: [
//             { name: "CRM", status: "active" },
//             { name: "ERP", status: "completed" }
//         ]
//     },
//     {
//         name: "Vali",
//         department: "Marketing",
//         experience: 6,
//         projects: [
//             { name: "Ads", status: "active" }
//         ]
//     },
//     {
//         name: "Sardor",
//         department: "IT",
//         experience: 2,
//         projects: [
//             { name: "Mobile App", status: "active" }
//         ]
//     },
//     {
//         name: "Madina",
//         department: "IT",
//         experience: 7,
//         projects: [
//             { name: "Website", status: "completed" }
//         ]
//     },
//     {
//         name: "Aziza",
//         department: "IT",
//         experience: 4,
//         projects: [
//             { name: "Dashboard", status: "active" }
//         ]
//     }
// ];

// const selectedEmployees = employees.filter((obj) => obj.department === "IT" && obj.projects.some(obj2 => obj2.status === "active") && obj.experience > 3)
// console.log(selectedEmployees);


