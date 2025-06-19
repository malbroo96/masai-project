let input = "All-convoYs-9-be:Alert1.";

function shiftAsciiBy4(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        // Shift only letters and digits
        if (
            (code >= 48 && code <= 57) ||   // 0-9
            (code >= 65 && code <= 90) ||   // A-Z
            (code >= 97 && code <= 122)     // a-z
        ) {
            result += String.fromCharCode(code + 4);
        } else {
            result += str[i]; // Keep symbol as is
        }
    }
    return result;
}

let output = shiftAsciiBy4(input);
console.log(output); // Epp-gsrzsCw-3-fi:Epivx5.