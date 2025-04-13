function reverseWords(str){
    toarr = str.split(' ').filter(word => word!= '').reverse().join(' ');
    return toarr;
}
let str = "  the   sky  is blue  ";

console.log(reverseWords(str));

