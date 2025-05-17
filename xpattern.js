function patternPrinting(N) {
    // Write code here
    let pattern =""
    for(let i=0 ; i<N ;i++){
      for(let j=0 ;j<N ;j++){
        if(i===0  || j===0  || i===N  ||  j===N  ||  i+j===N   || i===j){
          pattern+="* "
        }else{
          pattern+=" "
        }
      }
    }
    console.log(pattern)
    
    
    
    
    
    
}patternPrinting(10)
