let arr1=[1,2,54,6,8,7,55,4,6,6]
let arr2=[2,6,57,9,69,8,7,45,6,8]

let updatedarr1=arr1.filter((num)=>{return num % 2 === 0});
console.log(updatedarr1 + " even numbrs in arr1")
let sumarr2=arr2.reduce((ele,i)=>{ele+=i; return ele},0)
console.log(sumarr2+ " sum of arr2")
function sortandconcat(arr1,arr2){
    let sortedarr1=arr1.sort((a,b)=>{return a-b})
    let sortedarr2=arr2.sort((a,b)=>{return a-b})
    return sortedarr1.concat(sortedarr2);
}
console.log(sortandconcat(arr1,arr2)+ " sorted and concatenated array")
// console.log(finalarr +" final sorted and concatenated array")