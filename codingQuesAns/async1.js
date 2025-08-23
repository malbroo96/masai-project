count =0
const timerId=setInterval(()=>{console.log("Loading...");
    count++;
    if(count===5){
        clearInterval(timerId);
        console.log("loading sucessfull !");
    }
},1000);
