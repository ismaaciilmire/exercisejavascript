async function  fetchUserData(){
    console.log("start fetch data");
    // const respone = await fetch('./data.Json');
    const respone = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await respone.Json();
    console.log("respone:",data);

}