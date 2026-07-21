let str1 = "Salom"
console.log(str1.padEnd(str1.length+10, "."));

console.log("===========================");

let str2 = "Ba- "
console.log(str2.repeat(3));

console.log("===========================");

let str3 = "Men choyni yaxshi ko'raman"
console.log(str3.replace("choy", "qahva"));

console.log("===========================");

let str4 = "1, 2, 3, 2, 4, 2"
console.log(str4.replaceAll("2", "5"));

console.log("===========================");

let str5 = "Kod yozish juda qiziq"
console.log(str5.slice(4, 8));

console.log("===========================");

let str6 = "Dasturlash"
console.log(str6.substring(0,5));

console.log("===========================");

let str7 = "olma, banan, gilos, xurmo"
console.log(str7.split(" "));

console.log("===========================");

let str8 = "   Salom dunyo!   "
console.log(str8.trim());

console.log("===========================");

let str9 = 12345
console.log(str9.toString());

console.log("===========================");

let str10 = "Men JavaScript bilaman"
console.log(str10.toUpperCase());

console.log("===========================");

let str11 = "HELLO WORLD"
console.log(str11.toLowerCase());

console.log("===========================");

let str12 = "apple"
console.log(str12.localeCompare("banana"));

console.log("===========================");

let str13 = "5+3*2"
console.log(eval(str13));
