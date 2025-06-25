let car={
    brand:"tesla",
    getBrand:function(){
        return this.brand;
    }
}
let budjectcar=car.getBrand.bind(car)
console.log(budjectcar())