function counterfunction(){
    let count =0;
    function counter(){
        count++;
        return count;
    }
    function reset(){
        count =0;
        return count;
    }
    return {
        counter,reset
    };
}
const thecounter=counterfunction();



console.log(thecounter.counter());
console.log(thecounter.counter());  
 console.log(thecounter.reset());
 console.log(thecounter.counter());