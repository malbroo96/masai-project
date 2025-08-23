function memory(fn){
    const cache={};
    return function(...args){
        const key = JSON.stringify(args);
        if(cache.hasOwnProperty(key)){
            console.log(`returning cached result${key}`);
            return cache[key];

        }else {
            const result =fn(...args);
            cache[key]=result;
            console.log(`calculating result for ${key}`);
            return result;
        }
    }
}
function add(a,b){
    return a+b;
}
const addWithMemory = memory(add);


console.log(addWithMemory(5,10));
console.log(addWithMemory(10,5));
console.log(addWithMemory(5,10));
console.log(addWithMemory(2,5));