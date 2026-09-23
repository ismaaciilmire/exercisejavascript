async function  fetchUserData(){
    console.log("start fetch data");
    // const respone = await fetch('./data.Json');
    const respone = await fetch('data.json');
    const data = await respone.json();
    console.log("fetch data",data);
    console.log("data fetch complete")

}
fetchUserData();
console.log("this massege runs imediatily and is not bloked")