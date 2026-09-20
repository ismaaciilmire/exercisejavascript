// synchronous or bloking

function fetchUserDataSyncro (){
    alert("fetch user data");
    return{id:1, name:"ismail"}
}
console.log("bilaw inad so akhrido user datada")

const user = fetchUserDataSyncro();
console.log("user data", user);


console.log("massege kan waxa uu fulaya ilaa user datadu dhamado");


// Asynchronous or non-bloking

// function getUserData(callback){
//     setTimeout(()=>{
//    const User = {id: 1, Name:"ahmed"}
//    callback(User)
// },2000)

// }


// console.log("starting fetch user data")
// getUserData(function(User){
//     console.log(User)

// });
// console.log("massege ku tusaya si deg deg ah")



