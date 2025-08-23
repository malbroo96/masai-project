function createinventory(name,catagory,price){
return{
    name,
    catagory,
    price,
    describeItem :function(){
        console.log(`This is ${name} which comes under ${catagory} and this cost you ${price} rs`)

    }
}
}
let inventory=createinventory("laptop","electronics",25000)
inventory.describeItem()

function addItemDiscount(inventoryitem,discountpercent){
    inventoryitem.discountpercent = discountpercent
    inventoryitem.discountedprice=inventory.price-(inventoryitem.price*discountpercent/100)

    inventoryitem.applydiscount=function(){
        this.discountedprice=this.price-(this.price*this.discountpercent/100)
        console.log(`discount price for ${this.name}:${this.discountedprice}`)
    }
    return inventoryitem
}

const discounteditem=addItemDiscount(inventory,10)
discounteditem.applydiscount()