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
    const freqtable = {}

    for (let i = 0; i < str.length; i++) {
        if(letter in freqtable){
            freqtable += [letter]
        }
        else{
            freqtable[letter] = 1;
        }
    }
}

// String Decode
// Turn an encoded string into a decoded string.

// special bonus: how would you solve this to account for numbers larger than 9?

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function stringDecode(str) {

}