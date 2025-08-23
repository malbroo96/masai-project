function processproducts(products) {
    const productNames = products.map(product => product.name)
    products.forEach(product => {
        if (product.price > 50) {
            console.log(`${product.name} is above $50`)

        } else {
            // This is a comment                                        
            console.log(`${product.name} is below $50`)
        }
    })
}


const input = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
];

processproducts(input);