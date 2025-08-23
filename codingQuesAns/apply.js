function multiplyNumbers(a,b){
    function multiply(...num){
        return num.reduce((product,num)=>product*num,1)
    }
    return multiply.apply(undefined,[a,b])
}
console.log(multiplyNumbers(5,7))