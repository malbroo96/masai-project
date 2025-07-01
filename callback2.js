function timer(callbackk){
    setTimeout(()=>{
      
        callbackk()
    },2000)
}timer(oncomplete) 

function oncomplete(){
        console.log("The count down has ended")
       }