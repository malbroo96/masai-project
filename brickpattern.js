function brick(H,W){
    for(let i=0 ; i<H ;i++){
    let pattern=""
    if(i%2!==0){
        pattern+=" "
    }for(let j=0 ; j<W ; j++){
        pattern+="[]"
    }
    console.log(pattern)
}


}
brick(8,6)