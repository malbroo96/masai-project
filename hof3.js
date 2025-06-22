const numbers=[1,2,3,4,5,6,7,8,9,10];
  

function getEvenSqr(numbers){
return numbers.filter(num =>num%2===0)
.map(num=>num*num);
}
const result =getEvenSqr(numbers);
console.log(result.join(","))