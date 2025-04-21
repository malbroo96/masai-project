function oddPalindrome(N, str){
    //write code here
    let result = ""
    for (let i=0 ;i<N ;i++){
      if(i%2!==0){
        result+=str[i]
      }
      }
      reversed = result.split('').reverse().join('')
      if(result == reversed){
        console.log("yes")
      }else{
        console.log("no")
      }
    }
    
    
    
    
    
    
    
    