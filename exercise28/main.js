function fetchUserData (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const success = true;
        if(success){
        resolve({id:1, name:"ismail"});
        }else{
            reject("failed to fetch data")
        }


        },3000)

    })
}
fetchUserData()
.then((data)=>console.log("user data",data)) 
.catch(err=>console.err("user data",err))

// async and wait

async function displayUserdata (){
    try{
    //  secusss status
    const user = await fetchUserData();
    console.log(user)


    }catch(err){
        // err statsu
        console.log(err)

    }
}

displayUserdata();