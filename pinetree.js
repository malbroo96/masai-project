function pinetree(N){
for(let i=0 ; i<N; i++){
    let space =" ".repeat(N-i-1)
    let star ="*".repeat(2*i+1)
console.log(space+ star)
}
console.log("         ||")







}pinetree(10)