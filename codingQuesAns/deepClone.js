function deepclone(obj) {
    return JSON.parse(JSON.stringify(obj))
}const orginal={
    name:"akhil",
    hobbies:["reading","traviling"]
}
const cloned=deepclone(orginal)
cloned.hobbies.push("coding")
console.log("orginal:",orginal)
console.log("clone:",cloned)