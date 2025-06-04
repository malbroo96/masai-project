function Car(make ,model, year,isAvailable=true){
    this.make=make
    this.model=model
    this.year=year
    this.isAvailable=isAvailable
    console.log(`${make}, ${model}, ${year}, ${isAvailable}`)

}
Car("totyota", "corolla", 2020)
function Customer(name,rentedCars=[]){
    this.name=name
    this.rentedCars=rentedCars
    console.log(`${this.name}, ${this.rentedCars}`)
}
Customer("Murtaza", ["Car","Bike"])
Customer.prototype.rentAcar=function(car){
    if(car.isAvailable){
        car.isAvailable=false;
this.rentedCars.push(car)
    }
    else{
        console.log("This car is already taken")
    }
}
// Customer.rentAcar()
console.log(Customer.__proto__, "this is the proto of the customer")
function PremiumCustomer(name,discountRate){
    Customer.call(this,name)
    this.discountedRate=discountRate
}
PremiumCustomer.prototype=Object.create(Customer.prototype)
console.log(PremiumCustomer.prototype)
PremiumCustomer.prototype.constructor=PremiumCustomer
PremiumCustomer()





