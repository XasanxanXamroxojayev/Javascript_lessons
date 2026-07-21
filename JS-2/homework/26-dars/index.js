// const customers = [
//     { id: 1, name: "Ali", age: 22, totalSpent: 1200, isActive: true },
//     { id: 2, name: "Madina", age: 29, totalSpent: 800, isActive: true },
//     { id: 3, name: "Sardor", age: 31, totalSpent: 2500, isActive: false },
//     { id: 4, name: "Aziza", age: 27, totalSpent: 1800, isActive: true },
//     { id: 5, name: "Jasur", age: 35, totalSpent: 3200, isActive: true }
// ];

// let premiumCustomers = customers.filter((obj) => obj.isActive && obj.age >= 25 && obj.totalSpent > 1000)
// console.log(premiumCustomers);


// ======================================================================




// const products = [
//     { id: 1, title: "Laptop", category: "Electronics", price: 1200, stock: 5 },
//     { id: 2, title: "Mouse", category: "Electronics", price: 25, stock: 0 },
//     { id: 3, title: "Headphones", category: "Electronics", price: 150, stock: 20 },
//     { id: 4, title: "Desk", category: "Furniture", price: 300, stock: 10 },
//     { id: 5, title: "Monitor", category: "Electronics", price: 450, stock: 8 }
// ];

// let availableProducts = products.filter((obj) => obj.category === "Electronics" && obj.stock > 0 && obj.price <= 500)
// console.log(availableProducts);




// ========================================================================




// const transactions = [
//     { id: 101, amount: 500, status: "failed" },
//     { id: 102, amount: 800, status: "success" },
//     { id: 103, amount: 1500, status: "success" },
//     { id: 104, amount: 2200, status: "success" },
//     { id: 105, amount: 300, status: "failed" }
// ];



// let firstSuccessfulTransaction = transactions.find((obj) => obj.status === "success" && obj.amount > 1000)
// console.log(firstSuccessfulTransaction);




// ========================================================================





// const courses = [
//     { id: 1, title: "JavaScript Basics", level: "Beginner", price: 100, isPublished: true },
//     { id: 2, title: "React Mastery", level: "Advanced", price: 350, isPublished: true },
//     { id: 3, title: "Node.js API", level: "Intermediate", price: 220, isPublished: true },
//     { id: 4, title: "TypeScript Pro", level: "Advanced", price: 280, isPublished: false },
//     { id: 5, title: "Vue.js Advanced", level: "Advanced", price: 300, isPublished: true }
// ];

// let selectedCourse = courses.find((obj)=> obj.level === "Advanced" && obj.price <= 300 && obj.isPublished)
// console.log(selectedCourse);
