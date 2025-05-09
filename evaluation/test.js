const prime =function(N) {


    for (let i = 2; i <= N; i++) {
        let flagisprime=true
        for (let j=2 ; j<Math.sqrt(i) ;j++){
            if(i%j===0){
                flagisprime=false
            }
        }if(flagisprime===true){
            console.log(i)
        }

    }

}
prime(15)