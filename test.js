
for(let i=0;i<=15;i++){
    let line=""


    for(let j=0 ; j<=15; j++){
        // line += `(${i},${j}) `
        if(i==j || i+j==15 || i==15 || i==0 || j==15 || j==0
            ){
            line+="* "
            
        }else{
            line+="  "
        }
        // console.log(line)
    }
    console.log(line)


    
}