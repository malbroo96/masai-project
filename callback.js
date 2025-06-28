function TaskOne(){

    console.log("Task one Completed" )
}
function TaskTwo(calBack){
    console.log("Task Two completed")
    calBack();
}
 TaskTwo(TaskOne)

console.log("---------------------------------------------------------------------------")

function one(){
    console.log("this is one ")
}

function two(thisiscallback){
    console.log("this is two")
        thisiscallback()
}
two(one)
