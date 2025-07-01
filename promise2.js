function startTask(){
    return new Promise((res,rej)=>{
           setTimeout(()=>{
            res("Task A Completed")
           },1000)
    })
}
function processTask(taskAoutput){
    return new Promise((res)=>{
        setTimeout(()=>{
            res(`Task B Processed,${taskAoutput}`)
        },1500)
    })
}
function finalTask(taskBoutput){
    return new Promise((res)=>{
        setTimeout(()=>{
           res(`final result :${taskBoutput}`)
        },500)
    })
}
startTask().then((msgA)=>{
    console.log(msgA)
    return processTask(msgA)
}).then((msgB)=>{
    console.log(msgB)
    return finalTask(msgB)
}).then((finalmsg)=>{
    console.log(finalmsg)
})
.catch((error)=>{
    console.log("Error Occurred")
})


