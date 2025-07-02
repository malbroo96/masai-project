function timer(duration,onComplete){
    setTimeout(()=>{
        onComplete(`timer of ${duration} has finished`)
    },duration)
}


function done( message){
    console.log("✅",message)
}



timer(2000,done)