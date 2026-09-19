// spread operator

// const number =[1,2,3]

// const allNumber = [...number,4,5,6]

// console.log(allNumber)

// rest operator 

function multiply (...numbers){
    return numbers.reduce((total,mult)=> total*mult,1)

}
console.log(multiply(10,10))