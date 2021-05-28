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
    let new_arr = [];
    new_arr.push(honorific);
    for(var i =0; i<fullNames.length; i++){
      if(fullNames[i]===","){

      }
    }

}

const addHonor = (honorific, fullNames) => {
  let new_arr = [];
  let new_str = "";
  for(i = 0; i < fullNames.length; i++)
  {
      new_str = fullNames[i];
  }
  let temp_str = '';
  let last_name = '';
  for(i = 0; i < new_str.length; i++){
      if(new_str[i] == ","){
           console.log(temp_str);
           last_name = temp_str;
           temp_str = "";
      }
      else{
          temp_str += (new_str[i]);
      }
  }
  console.log(honorific + temp_str +" "+last_name);

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