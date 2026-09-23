// http request or fetch data Api Get method

async function fetchData() {

    try {

        console.log("start data fetched")
        const respone = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(respone)

    } catch (err) {
    
    }


}
fetchData();