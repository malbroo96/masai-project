let car={
    brand:"tesla",
    getBrand:function(){
        return this.brand;
    }
}
let boundgetBrand=car.getBrand.bind(car)
console.log(boundgetBrand())