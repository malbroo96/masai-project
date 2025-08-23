function extractAndReverse(arr){
    const Subarray =arr.slice(2,5)
    const reversedSubarray = Subarray.reverse()
    return reversedSubarray 
} 
const orginalarray =[15,30,45,60,75,90]
const result = extractAndReverse(orginalarray)
console.log('original array:', orginalarray)
console.log('reversed subarray:', result)   