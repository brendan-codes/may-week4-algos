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
const strs1 = "ab#c"
const strt1 = "ad#c"
// output: true

const strs2 = "ab##"
const strt2 = "c#d#"
// output: true

const strs3 = "a##c"
const strt3 = "#a#c"
// output: true

function backStringCompare(strs, strt) {
  let slength = strs.length;
  let tlength = strt.length;

  let sArr = [];
  let tArr = [];

  for (let i = slength-1; i < slength; i--) {
    if (strs[i] !== "#") {
      sArr.push(strs[i])
    } else {
      i--;
    }
    console.log(sArr);
  }

  for (let j = tlength-1; j < tlength; j--) {
    if (strt[i] !== "#") {
      tArr.push(strt[i])
    } else {
      j--;
    }
    console.log(tArr);
  }

    if (sArr === tArr) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(backStringCompare(strs1, strt1));

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