function creatCounter(){
    let count = 0
    return {
        increment : function(){
            count+=1
        return count;

        },
        getCount: function(){
            return count;
        }
    };
}
const counter =creatCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.getCount());