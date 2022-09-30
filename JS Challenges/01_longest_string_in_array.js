/* Longest String in an Array. Write a function that accepts an array of strings. Return the longest string. */

const getLongestString = arr => arr.reduce((longest, current) => {
  if (current.length > longest.length) {
      longest = current;
  }
  return longest;
}, '');

getLongestString(['dasd', 'dasdasd', 'd', '', 'dasdasdasd']);