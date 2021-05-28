// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears.

// The maximum number of consecutive characters in a row is 9

// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.
const str1 = "aaaabbcdddbbb";
const expected1 = "a4b2c1d3b3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

function stringEncode(str) {
    let codedStr = "";
    let freq = {};
    if(str.length = 0 || isNaN(str[0]) === false ){
        return str;
    }
    for(let i = 0; i < str.length; i ++){
        if(freq.hasOwnProperty(str[i])){
            freq[str[i]]++;
        } else{
            freq[str[i]] = 1;
        }
    }
    for( key in freq){
        codedStr = codedStr + key + freq[key];
    }
    return codedStr.length < str.length ? codedStr : str;

}
console.log(stringEncode(str1))


// String Decode
// Turn an encoded string into a decoded string.

// special bonus: how would you solve this to account for numbers larger than 9?
const str1 = "a3b2c1d31";
const expected1 = "aaabbcddd";

function stringDecode(str) {
    decodedStr = "";
    for (let i = 0; i < str.length; i += 2) {
        if(str.length = 0 || isNaN(str[0]) === false ){
            return str;
        }
        // console.log('i = ', i)
        if (!isNaN(str[i + 2])) {
            let num = parseInt(str[i + 1] + str[i + 2])
            console.log(str[i+1] + str[i+2], " = sum", num, " = num");
            for (let j = 0; j < num; j++) {
                decodedStr += str[i];
            }
        }else{
            for (let k = 0; k < str[i + 1]; k++) {
                decodedStr += str[i];
            }
        }
    }
    return decodedStr
}
// console.log(isNaN("undefined"), "NaN test")
// console.log(stringDecode(str1));
