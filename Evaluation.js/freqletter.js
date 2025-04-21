// let str = "akhil joseph";
// let letter_freq = {}; // Initialize an empty object to store letter frequencies

// for (let i = 0; i < str.length; i++) { // Use correct syntax for string length
//     let letter = str[i]; // Get the current character from the string

//     if (letter_freq[letter]) { // Check if the letter exists in the object
//         letter_freq[letter] += 1; // Increment the frequency count
//     } else {
//         letter_freq[letter] = 1; // Initialize the count for a new letter
//     }
// }

// console.log(letter_freq); // Display the frequency object


let str = "masaischool";
let  freq ={};
for (let i = 0 ; i<str.length ; i++){
    let makearr = str[i];
     if (freq[makearr]){
        freq[makearr]+= 1;

     }else{
        freq[makearr] = 1
     }
}console.log (freq)