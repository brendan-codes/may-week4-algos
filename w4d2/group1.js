/*
  https://leetcode.com/problems/backspace-string-compare/

  BACKSPACE STRING COMPARE

  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.

  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time

  Examples:
  Input: S = "ab#c", T = "ad#c"
  Output: true
  Explanation: Both S and T become "ac"

  Input: S = "ab##", T = "c#d#"
  Output: true
  Explanation: Both S and T become ""

  Input: S = "a##c", T = "#a#c"
  Output: true
  Explanation: Both S and T become "c"
*/

  const S1 = "ab#c";
  const T1 = "ad#c";
  const expected1 = true;
  const S2 = "ab##";
  const T2 = "c#d#";
  const expected2 = true;
  const S3 = "a##c";
  const T3 = "#a#c";
  const expected3 = true;
function backspaceStringCompare(str1, str2) {
  let i = 0;
  let j = 0;
  while(i != str1.length-1 && j != str2.length-1){
    if(i == '#') {
      i++;
    }
    if(j == '#') {
      j++;
    }
    if(str1[i] == str2[j]) {
      i++;
      j++;
    } else if(str1[i] != str2[j]) {
      if(str1[i+1] == '#') {
        i += 2;
      } else if(str2[j+1] == '#') {
        j+=2;
      } else {
        return false;
      }
    }
  }
  if(str1[str1.length-1] == str2[str2.length-1]){
    return true;
  } else {
    return false;
  }
}
console.log(backspaceStringCompare(S1, T1));

/*
    CAN STRING ONE BE MADE FROM STRING TWO

    Given two strings,
    return true if the first string can be built from the letters in the 2nd string

    Ignore case

    Input: "Hello World", "lloeh wordl"
    Output: true

    Input: "Hey", "hello"
    Output: false, second string is missing a "y"

    Input: "hello", "helo"
    Output: false, second string doesn't have enough "l" letters
 */