/* Create a function that takes in two strings as two parameters and returns a Boolean that indicates whether or not the first string is an anagram of the second string. */

const checkAnagrams = (str1, str2) => (
  str1
    .toLowerCase()
    .split('')
    .sort()
    .join('') === 
  str2
    .toLowerCase()
    .split('')
    .sort()
    .join('')
);

console.log(checkAnagrams('Friend', 'finder'));