function presonalInfo (){
    console.log(`Name: ${this.name},age:${this.age}`)
}



const person ={name:"akhil  ",
    age:28
}
  

presonalInfo.call(person)