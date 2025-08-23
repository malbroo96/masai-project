function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

function sumOfArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

function sortAndConcat(arr1, arr2) {
  const sortedArr1 = arr1.slice().sort((a, b) => a - b);
  const sortedArr2 = arr2.slice().sort((a, b) => a - b);
  return sortedArr1.concat(sortedArr2);
}

const array1 = [12, 7, 9, 14, 5];
const array2 = [3, 8, 2, 11, 6];

const evensArray1 = filterEvenNumbers(array1);
const evensArray2 = filterEvenNumbers(array2);

const sumArray1 = sumOfArray(array1);
const sumArray2 = sumOfArray(array2);

const sortedConcatArray = sortAndConcat(array1, array2);

console.log('Even numbers in Array 1:', evensArray1);
console.log('Even numbers in Array 2:', evensArray2);
console.log('Sum of Array 1:', sumArray1);
console.log('Sum of Array 2:', sumArray2);
console.log('Sorted and Concatenated Array:', sortedConcatArray);
