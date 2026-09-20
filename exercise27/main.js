// promise

function fetchUserData (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const success = true;
        if(success){
        resolve({id:1, name:"ismail"});
        }else{
            reject("failed to fetch data")
        }


        },2000)

    })
}
fetchUserData()
.then((data)=>console.log("user data",data)) 
.catch(err=>console.err("user data",err))
