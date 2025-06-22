const products =[
    {name:"laptop",price:15000},
    {name:"mobile",price:5000},
    {name:"tablet",price:11000},
    {name:"desktop",price:20000}
]
console.log("products has been catagorised by price above 10000 and below 10000");
function catagoriseProducts(products){
    const productname=products.map(product =>product.name)
    products.forEach((products)=>{
        if(products.price<10000){
            console.log(`${products.name} is cheaper`)
        }else {
            console.log(`${products.name} is expensive`)
        }

    })
}
catagoriseProducts(products);
