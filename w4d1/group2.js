// "Possible Palindrome"

// Given a string
// return whether or not it's possible for it to be re-ordered into a palindrome
// What is it about a string that makes it possible for it to be a palindrome?

// palindrome is a string that when reversed is still equal to itself.

// "aabbccdde" => true
// "abcdedcba"

// "baba" => true
// "baab"

// "bcda" => false
// "abcd"

/*
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters

  What is it about a string that makes it possible for it to be a palindrome?
*/

const str1 = "aabbccdde";
const expected1 = true;

const str2 = "baba";
const expected2 = true;

const str3 = "bcda";
const expected3 = false;

const str4 = "";
const expected4 = false;

const str5 = "a";
const expected5 = true;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */

function canStringBecomePalindrome(str) {
    if(str.length === 0 ){
        return false;
    }
    const freq = {}
    for(let i= 0; i < str.length; i++){
        if(freq.hasOwnProperty(str[i])){
            freq[str[i]]++;

        }else{
            freq[str[i]] = 1;
        }
    }
    //count letters with odd # of appearances
    let count = 0;
    for(key in freq){
        console.log(key, freq[key]);
        if(freq[key] % 2 !== 0){
            count++;
        }
    }
    // if(count > 1){
    //     return false;
    // }
    // return true;
    return count > 1 ? false : true;
}

console.log(canStringBecomePalindrome(str5));