// callback function

function operate (a,b,callback){
    return callback (a,b);

}

function add (a,b){
return a+b;
}

function substract (a,b){
    return a-b;

}
function multiply (a,b){
    return a*b;

}

function devide (a,b){
    return a/b;

}

console.log("addition",operate(10,20,add))
console.log("substract",operate(5,5,substract))
console.log("multipaly",operate(10,5,multiply))
console.log("devide",operate(100,2,devide))