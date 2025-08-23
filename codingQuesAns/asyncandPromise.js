console.log("Begin");
 setTimeout(() => { console.log("Timeout Task"); }, 0);
  Promise.resolve().then(() => { console.log("Promise Task");

   }); console.log("End");
//    this code is perfectly working fine 
//    first the sync code will works and then 
// Promise task works because it is sync inside the function
// at last setTimeout because that is async