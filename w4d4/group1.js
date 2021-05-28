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
    if (str.length < 1) {
        return str;
    }
    let freqTbl = {};
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (!freqTbl.hasOwnProperty(str[i])) {
            freqTbl[str[i]] = 1;
        } else {
            freqTbl[str[i]]++;
        }
    }
    for (letter in freqTbl) {
        newStr = newStr + letter + freqTbl[letter];
    }
    if (newStr.length < str.length) {
        return newStr;
    } else {
        return str;
    }
}

console.log(stringEncode(str1));
console.log(stringEncode(str2));
console.log(stringEncode(str3));
console.log(stringEncode(str4));



// String Decode
// Turn an encoded string into a decoded string.

// special bonus: how would you solve this to account for numbers larger than 9?

function stringDecode(str) {}

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";