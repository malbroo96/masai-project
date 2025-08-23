function outerfunction(){
    let message ="hello guys";
    return function(){
        console.log(message);
    }
}
let inner =outerfunction();
inner()