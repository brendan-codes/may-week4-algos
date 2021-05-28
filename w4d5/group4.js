// STRING MATCHING IN AN ARRAY

// Given an array of string words. Return all strings in words which is substring of another word in any order.

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

// Examples:

wordsArr1 = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.


// Example 2:

wordsArr2 = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".


// Example 3:

wordsArr3 = ["blue","green","bu"]
// Output: []


// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// It's guaranteed that words[i] will be unique.

let str1 = ["mass","as","hero","superhero"];
let str2 = ["leetcode","et","code"];
let str3 = ["blue","green","bu"];

function wordInListofWords(str) {
    let list = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if ( i !== j && str[i].includes(str[j])) {
                console.log("Push", str[j])
                list.push(str[j]);
            }
        }
    }
    return(list);

}

console.log(wordInListofWords(str1));
console.log(wordInListofWords(str2));
console.log(wordInListofWords(str3));