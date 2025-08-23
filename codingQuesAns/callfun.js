function personalInfo(){
    console.log(`my name is ${this.name},and i am ${this.age}`)
}




const person={
    name:"akhil",
    age:28
};
personalInfo.call(person)