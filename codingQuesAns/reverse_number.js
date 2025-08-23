function reverseNumber(num) {
  let reversed = Number(num.toString().split("").reverse().join(""));
  console.log("output: " + reversed);
}


reverseNumber(971);
