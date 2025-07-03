function createCar(make,model,year){
    return{
        make,
        model,
        year,
        cardetails(){
            console.log(`This is ${make } manufactured in ${year} and this is ${model}`)
        }
    }
}
let car1=createCar("maruthi susuki","Igins",2022)
let car2=createCar("toyota","etios",2010)
car1.cardetails()
car2.cardetails()