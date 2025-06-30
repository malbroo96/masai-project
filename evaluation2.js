function showname(name,call){
    setTimeout(()=>{
        const message=`hello, ${name}`;
        call(message)
    },2000)
}

let just=showname("akhil",(mssge)=>{
    console.log(mssge)
})