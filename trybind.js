let car={
    name:"toyota",
    model:"innova",

    getmodel:function(){
        return this.model
    }
}
let display=car.getmodel.bind(car)

console.log(display())