const user = {
  name: "John Doe",
  age: 25,
  email: "john@example.com",
  isAdmin: false
};

const tojson=JSON.stringify(user)
console.log(tojson)



const toparse=JSON.parse(tojson)
console.log(toparse)