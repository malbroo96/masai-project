function modifyarray(){
let arr=["ajay","vishnu","amal","akhil","arun","athul"]
let finalarr=arr.splice(2,2,"aravind")

return arr 

}

console.log(modifyarray() + " this modified array")



function checkname(arr){
let checkname="akhil"
if(arr.includes(checkname)){
    console.log(checkname + " is present in the array")
}else{
    console.log(checkname + " is not present in the array")
    //akhil has been removed from the array
}
}checkname(modifyarray())


console.log(modifyarray().join(",")+" the names had been joined with coma")