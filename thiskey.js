const ford={
    model:"figo",
    class:"commuter",

    display:function(){
        console.log("This is display method:",this.model)
    }


}


function regularfun(){
    let reg=ford.model
    console.log("this is regularfun :",this.model)
    //this can be done with dotnotation
}


ford.display()
regularfun()