function deepclonetry(obj){
    return JSON.parse(JSON.stringify(obj));
}

const orginal ={
name :"alice",
hobbies:["reading","traveling"]
};


const clone=deepclonetry(orginal);


clone.hobbies.push("coding");



console.log(orginal, " This is the orginal")
console.log(clone," This is the cloned one")