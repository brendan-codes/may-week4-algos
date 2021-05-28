/*
  ADD HONORIFIC

  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format

  Return a new array of strings in this format: "Honorific FirstName LastName"

  Bonus: avoid built in methods like split, slice, and substring
*/

// Inputs
const honorific1 = "Mr.";
const names1 = [];
// Output: []

// Inputs
const honorific2 = "Sir";
const names2 = ["John, Elton", "Mckellen, Ian"];
// Output: ["Sir Elton John", "Sir Ian Mckellen"]

// Inputs
const honorific3 = "Dr.";
const names3 = ["Wright, Jane"];
// Output: ["Dr. Jane Wright"]

const addHonor = (honorific, fullNames) => {
  let newArr = []
  for (let i = 0; i < fullNames.length; i++) {
    let name = i.split(", ");
    newArr.push(honorific, name[1], name[0])
    // newArr.push( honorific )
  }
}



// LONGEST NONREPEATING SUBSTRING

// Given a string, find the length of the longest substring without repeating characters.
// bonus: O(n)

str = "abc"
// => 3

// str = "bbb"
// => 1

// str = "cabc"
// => 3

// str = "aabbc"
// => 2

// str = "dvadf"
// => 4

const lengthOfLongestSubstr = (s) => {
  let freq = {};
  let maxCount = count = startIdx = 0;

  for (let i = 0; i < s.length; i++) {
    if (!freq.hasOwnProperty(s[i])) {
      freq[s[i]] = i;
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      i = freq[s[i]] + 1;
      count = 0;
    }
    console.log("i = ", s[i])
  }
  console.log(freq)
  return maxCount
}

console.log(lengthOfLongestSubstr(str))