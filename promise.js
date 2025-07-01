function fetchdata(){
    return new Promise((res,rej)=>{
    let random=Math.random() <0.5 ? 0:1 ;
    setTimeout(()=>{
            if(random ===0){
                res("Task completed ,we got '0'")
            }else{
                rej("mission failed ,we got '1")
            }
        },2000)

    })
}


fetchdata().then((msg)=>console.log("/",msg))
.catch((err)=>console.log("*",err))