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

//whether string is odd or even, if odd one number must not match
//if even then all must have a matching pair
function possPali(input) {
    var countEven = 0;
    var countOdd = 0;
        for(var i=0; i<input.length; i++) {
            if(i == (input[i+1])) {
                countEven += 1;
            } else {
                countOdd +=1;
            }
            if(countOdd > 1) {
                return false;
            }
onsole.log(countEven)
console.log(countOdd)
}
return true;
}
var test = 'aabbccdde'
console.log(possPali(test))
