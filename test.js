let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("An error occurred");
  }, 1000);
});

promise.then((result) => {
  console.log(result);
}).catch((msg)=>{
  console.log(msg,"something")
})

