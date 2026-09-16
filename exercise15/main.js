const peoples = [
    { name: "hasan", age: 26, city: "hargeisa" },
    { name: "zadaam", age: 19, city: "burco" },
    { name: "hafsa", age: 21, city: "borama" },
];
 
for(const student of peoples)
    console.log(student)
for(const key in peoples){
    console.log(peoples[key])
}