// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }
// // console.log(".....................................")
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }let gives you the value per iteration (0, 1, 2).
// var gives you the value after the loop ends (3, 3, 3).
// This is because of how JavaScript handles variable scope for let (block) vs var (function/global).


let arr = [1, 2, 3, 4, 5];
arr.map(ele =>{
    console.log(ele * 2);
})