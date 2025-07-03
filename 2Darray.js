
// function pattern(R,C,){
// for(let i=1 ; i<R ;i++){
//     let result = ""
// for(let j=i ; j<C ;j++){
//     result +=(i+j)+" "
// }
// console.log(result)
// }
// }
// pattern(3,2)
function pattern(R, C) {
  for (let i = 1; i < R; i++) {
    let result = "";
    for (let j = i; j < C; j++) {
      result += (i + j) + " ";
    }
    console.log(result.trim());
  }
}

pattern(5, 5);
