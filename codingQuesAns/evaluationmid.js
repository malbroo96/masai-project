async function fetchProducts() {
    const existingProducts = localStorage.getItem("products");
    let products;
    // console.log(existingProducts)
    if(existingProducts === undefined || !existingProducts) {
const response = await fetch("https://dummyjson.com/products");

const data = await response.json()

console.log(data)

products = data.products;
localStorage.setItem("products", JSON.stringify(products))
    } else {
        products = JSON.parse(existingProducts);
    }
    
console.log(products)


const containerdiv = document.getElementById("products");
containerdiv.innerHTML = '';

products.forEach(p => {
    const div2 = document.createElement('div');
    div2.innerHTML = `
    <img src ="${p.thumbnail}" />
    <h5>${p.title}</h5>
    <p>${p.description}</p>
    <p>${p.price}</p>
    `
    containerdiv.appendChild(div2);
})

}

fetchProducts();