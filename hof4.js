const str="Hello World";
function getCharCount(str){
    return str.trim().toLowerCase().split("").reduce((freq,char)=>{
        if(char!==''){
            freq[char]=(freq[char]||0)+1;
        }
        return freq
    },{});

}
const result=getCharCount(str);
console.log(result);