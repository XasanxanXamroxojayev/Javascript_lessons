let data1 = {
    Id: 239203,
    MaxalaNomeri: 83028,
    Yosh: 17,
    Ism: "Palonchi",
    Familya: "Boltaboyev",
    Ochestva: "Ergashev",
    YashashMuxti: "O'zbekiston",
    Otasi: "Ergash",
    Onasi: "Malika",
}
// console.log(data1);
console.log(data1.Id, data1.MaxalaNomeri); // static
console.log(data1["Id"], data1["Ism"]); // dinamic






let data2 = {
    Yangi_Yil: "1-yanvar",
    Vatan_Himoyachilari_Kuni: "14-yanvar",
    Xotin_Qizlar_Kuni: "8-mart",
    Navroz_Bayrami: "21-mart",
    Xotira_Va_Qadrlash_Kuni: "9-may",
    Mustaqillik_Kuni: "1-sentabr",
    Oqituvchi_Va_Murabbiylar_kuni: "1-oktabr",
    Konstitutsiya_kuni: "8-dekabr",
    Onasi: "Malika",
}
// console.log(data2);
console.log(data2.Yangi_Yil);
console.log(data2["Navroz_Bayrami"]);



let data3 = {
    ism: "Abdug'ani",
    id: 89398534,
    yosh: 22,
    card: 9860,
    boy: 186,
    otasi: "bor",
    onasi: "bor",
}
// console.log(data3);
console.log(data3.card);
console.log(data3["yosh"]);




let data4 = {
    lenovo: "$2899M",
    ASUS: "$4986M",
    ACER: "$5465M",
    Microsoft: "$6456M",
    MacBook: "$8652M",
}
// console.log(data4);
console.log(data4.ACER);
console.log(data4["MacBook"]);

