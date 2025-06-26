function manageStudents(){
    let students=["ajay","irfan","imran","akhil","amal"];
    let updatedStudents=students.splice(2,1,"athul");
    //removed imran and add athul
    return students;
}

   let theFinal=manageStudents()
console.log(theFinal)


function checkname(students){
    if(theFinal.includes("akhil")){
        console.log("akhil is present in the array")
    }else {
        console.log("akhil is not present in the array")
    }


}checkname(theFinal)



function joinarray(arr1){
return arr1.join(",")

}

let joined=joinarray(theFinal)

console.log(joined)