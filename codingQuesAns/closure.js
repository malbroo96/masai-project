function outerFunction(){
    const message ="hello from outer function";
    function innerFunction(){
        console.log(message);
    }
    return innerFunction
}
const myclosure=outerFunction()
myclosure()