/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
 Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/

//Input: s = "  fly me   to   the moon  "
//Input: s = "Hello World"
let inputVal = "  fly me   to   the moon  "
//trim to remove spaces and split the wordds using space
let chars = inputVal.trim().split(" ")
//get the last element of array with the length of array - 1
let lastElement = chars[chars.length - 1];
//console.log("The last word is \"" + lastElement + "\" with length -  " + lastElement.length)

//anagram
//Input: isAnagram('listen', 'silent')
var inputString1 = "Post"
var inputString2 = "Stop1"
//either make all the strings to uppercase or lowercase if we are doing === match
let output = isAnagram(inputString1.toLowerCase(), inputString2.toLowerCase());
console.log(output)
//function to perform the logic
function isAnagram(firstString, secondString) {
    //sort the strings
    //check the length of both the strings
    if (firstString.length == secondString.length) {
        //seperate the characters and store it in an array
        const arr1 = firstString.split('');
        const arr2 = secondString.split('');
        //sort the arrays
        arr1.sort();
        arr2.sort();
        console.log(arr1)
        console.log(arr2)
        //compare array one values with array two
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                var isArray = "True"
            } else {
                isArray = "False"
            } break;
            //stop the for if the match is false
        }
        return isArray
    }
    else {
        return "please check if the input strings are of same length"
    }
}
