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

const honor = (title, names) => {

  let final = [];

  for (var i=0; i<names.length; i++) {
      let name = names[i];
      let toggle = true;
      let temp = (title + " ");
      let firstname = "";
      let lastname = "";

      for (var j=0; j<name.length; j++) {
          if (name[j] === ",") {
              j += 1;
              toggle = !toggle;
          }
          if (toggle) {
              lastname += name[j];
          } else {
              firstname += name[j];
          }
          // console.log(`first name: ${fn}`, `last name: ${ln}`);
      }

      // temp is "title " RN
      temp += (firstname + " " + lastname);
      final.push(temp);
  }
  console.log(final);
  return final;
}

// LONGEST NONREPEATING SUBSTRING

// Given a string, find the length of the longest substring without repeating characters.
// bonus: O(n)

// str = "abc"
// => 3

// str = "bbb"
// => 1

// str = "cabc"
// => 3

// str = "aabbc"
// => 2

// str = "dvadf"
// => 4

const lengthOfLongestSubstr = (s) => {}