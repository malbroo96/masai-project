async function Fetchucserdata(){
    try{
        let res=await fetch('https://fakestoreapi.com/products')
        let products=await res.json()
        products.forEach((product)=>{console.log(product.title)})
    let total=products.reduce((acc,product)=>{return acc + product.price},0)
    console.log("total price :",total.toFixed(2))
    }catch(error){
        console.log("error while loading please try again !")
    }
}Fetchucserdata()