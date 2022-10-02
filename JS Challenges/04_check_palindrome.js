/* Write a function that will return whether or not a string is a palindrome. */

const isPalindrome = str => {
  return str === str.split('').reverse().join('');
}