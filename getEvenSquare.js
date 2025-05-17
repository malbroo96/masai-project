function getEvenSquare(numbers){
    return numbers.filter(num => num%2===0)
    .map(num=>num*num)
}
const numbers=[1,2,3,4,5,6,7,8,9,10]
    const result=getEvenSquare(numbers)
    
console.log(result)