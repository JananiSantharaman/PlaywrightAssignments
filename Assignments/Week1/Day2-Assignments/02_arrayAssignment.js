/*


4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/


/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,12,3]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]
*/
var inoutArray = [0, 1, 0, 3, 12]
var arrayvaluetoMove = 0
moveZeroToEnd(inoutArray, arrayvaluetoMove)
function moveZeroToEnd(nums, valueToMove) {
    var newArray = []
    var newArray2 = []
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] != valueToMove) {
            newArray.push(nums[k])
        } else {
            newArray2.push(nums[k])
        }
    }
    console.log("The new array after the zeros moved to end = " + newArray.concat(newArray2))
}


/*
2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

//var nums1 = [1, 2, 2, 1];
//var nums2 = [2, 2]
var nums1 = [4, 9, 5];
var nums2 = [9, 4, 9, 8, 4]
var intersectionArr = []
for (let i = 0; i < nums1.length; i++) {
    const element = nums1[i];
    for (let j = 0; j < nums2.length; j++) {
        const element2 = nums2[j];
        if (element === element2) {
            if (intersectionArr.includes(element)) {
            } else {
                intersectionArr.push(element)
            }
        }
    }
}
console.log(intersectionArr)


/*3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1
*/
var nums3 = [34, 7, 21, 89, 54, 10, 91, 67]
for (let l = 0; l < nums3.length; l++) {
    const element = nums3[l];
    
}
