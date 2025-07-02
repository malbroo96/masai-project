async function Fetchucserdata(){//start with async keyword
    try{//then this is resolve 
        let res=await fetch('https://fakestoreapi.com/products')//use await for waiting for the result 
        let products=await res.json()//to extract the json data to readable 
        products.forEach((product)=>{console.log(product.title)})//ittrate through each element to view title
    let total=products.reduce((acc,product)=>{return acc + product.price},0)//ittrate each price to find total
    console.log("total price :",total.toFixed(2))// to fixed is to redefine the point value to max 2
    }catch(error){//to deal with errors
        console.log("error while loading please try again !")//error message
    }
}Fetchucserdata()//to invoke