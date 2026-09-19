
// do while

// let password;

// do{
// password = prompt("inter your password")
// console.log("welcome user this our dashboad")
// }while(password != "12345")


// for of waxay ka shaqaysa in array

//   const students = ["hanad","hafsa","najax"]

//   for(let student of students)
//     console.log(student)


// for in waxay ka shaqaysa objectiga

// const student = {name:"ismail", age:25, country:"somaliland"}

// for(const  key in student){
//     console.log(student[key])
// }


// ternary operator

// let age = 26;
// const me = age >= 18 ? "u are a dult": "u are manor"
// console.log(me)

// and && operator

// let age = 22

// const message = age >= 18 && "u are a dult"
// console.log(message)


// for loop

// const classStdents =["mohamed ","ali","jamac","farax","hanad"]

// console.log(classStdents.length)

// for(let i=0; i < classStdents.length; i++){
//     console.log(classStdents[i])

// }




// forEach         waa for loopti oo shorthand lasogabiyey

// const fruits = ["banana","apple","chery","cambe"]

// fruits.forEach((fruit)=>{
// console.log("i like "+fruit)
// })



// console.log("--------------- sidana wad u isticmalikarta")

// fruits.forEach(function(fruit){
// console.log("i like "+fruit)
// })


// map

// const numbers = [1,2,3,4,5]

// const newNumbers = numbers.map ((number)=> number*2)

// console.log(newNumbers)

// const fruits =["apple","banana","chery"]

// const newFruit = fruits.map((fruit,index)=>fruit+" "+index)

// console.log(newFruit)

// filter

// const numbers =[1,2,3,4,5,6]

// const evenNumbers = numbers.filter((Number)=> Number % 2 ===0)
// console.log(evenNumbers)
 
// and other exmaple

// const scores = [40,60,70,80,99,100]

// const score = scores.filter((score)=> score > 60)
// console.log(score)

// reduce

// const numbers = [1,2,3,4,5]
// const multi = numbers.reduce ((total,num)=> total*num)
// console.log(multi)

// ES6 template iterate wa isbadalki ugu weyna lagusameyey javascript

// const name ="ismail";
// const city = "hargeisa";

// const message = `hello ${name} welcome to ${city}`
// console.log(message)


// distructure array  

// const colors = ["red","green","blue"]

// const [red, ,blue] = colors

// console.log(blue)

// distructure object

// const cars = {make: "toyota", model:"corolla", year: 2020}

// const {make,model} = cars

// console.log(make)
// console.log(model)


// defult parameters

// function great (name ="guest"){
//     console.log(`hello ${name}`)

// }
// great("ismail")

// spread operator


// const numbers =[1,2,3,4]

// const allNumber = [...numbers,5,6,7,8]
// console.log(allNumber)




// rest operator

// function sum (...numbers){
// return numbers.reduce((total,sum)=> total+sum,0)
// }

// console.log(sum(20,30,50,100))