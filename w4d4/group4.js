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
    if(str.length <= 1){
        return str;
    }

    let tempLetter = "";
    let tempNum = 1;
    let result = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] == str[i-1]){
          tempLetter = str[i];
          tempNum++;
        }
        if(str[i] !== str[i-1] && i !== 0){
          result += tempLetter;
          result += tempNum;
          tempLetter = str[i];
          tempNum = 1;
        }
        if(i == str.length - 1){
          result += tempLetter;
          result += tempNum;
        }
    }

    if(result.length < str.length){
        return result
    } else {
        return str
    }
}

console.log(stringEncode(str1))
console.log(stringEncode(str2))
console.log(stringEncode(str3))
console.log(stringEncode(str4))


// String Decode
// Turn an encoded string into a decoded string.

// special bonus: how would you solve this to account for numbers larger than 9?


const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function stringDecode(str) {

    let tempCount = 0;
    let tempLetter = "";
    let result = "";

    for(let i = 1; i < str.length; i + 2){
        result += str[i-1]
    }

    return result
}

console.log(stringDecode(str1))