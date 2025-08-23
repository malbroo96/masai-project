function checknumbers(num){
   return new Promise((res,rej)=>{
        if(num%2===0){
            res("This Number is Even ")
        }else{
            rej("This Number is Odd")
        }
    })
}


checknumbers(5).then((msg)=>console.log(msg,"✅")).catch((msg)=>console.log(msg,"❌"))
checknumbers(2).then((msg)=>console.log(msg,"✅")).catch((msg)=>console.log(msg,"❌"))
