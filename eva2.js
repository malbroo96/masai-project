
// THIS IS CALLBACK



function test(name,callbackkk){
    console.log("hi guys i am "+name)
    callbackkk()
}

function goodnight(){
    console.log("good night guys")
}test("akhil",goodnight)






// THIS IS PROMISE


let Mypromise=new Promise(function (res,rej){
    let sucess=false;
    if(sucess){
        res("recived sucessfully")
    }else{
        rej("mission failed")
    }
})


Mypromise.then((res)=>{
    console.log("sucess",res)
}).catch((rej)=>{
    console.log("error",rej)
})



// hof



let arr=[1,2,3,54,6,56,78,52,456,12,4,5,5]


let result=arr.map(ele=> ele*2).filter(ele=>ele%2==0)
console.log(result)

let result1=arr.reduce((acc,cur)=>{
  return  acc+cur
},0)
console.log(result1)

