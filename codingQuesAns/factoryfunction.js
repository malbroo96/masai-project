function createEmployee(name,role,salary){
    return{
        name,
        role,
        salary,
        introduce(){
            console.log(`Hello guys I'm ${name} i'm the ${role} of this company and i'm earning ${salary} a month`)
        }

    }

}
let employee1=createEmployee("akhil","ceo",300000)
let employee2=createEmployee("leena","manager",200000)


employee1.introduce()
employee2.introduce()