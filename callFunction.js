function presonalInfo (){
    console.log(`Name: ${this.name},age:${this.age}`)
}



const person ={name:"akhil  ",
    age:28
}
const persno2 = {name:"sachin",
    age:30  }
  

presonalInfo.call(person)
presonalInfo.call(persno2)