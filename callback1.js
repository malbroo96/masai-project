function fetchuserdata(callback){
    console.log("fetching user data")
setTimeout(()=>{
    console.log("user data recived")
    callback()
},1000)
}
function fetchuserpost(callback){
    console.log("fetching user posts...")
    setTimeout(()=>{
        console.log("user post recived")
        callback()
    },1500)
}
fetchuserdata(()=>{
    fetchuserpost(()=>{
        console.log("all data loaded successfully !")
    })
})