function closure(){
    let functions=[];
    for(let i=0;i<=5;i++){
        functions.push(function(){
            console.log("index is :"+i);
        });
    }
    return functions
}

const result=closure();
result[0]()
result[1]()
result[2]()
result[3]()
result[4]()