/*Classroom 1

int val = 10; // 1,2,3,4,...10
function for odd or even !!

print odd numbers between 1 to n // 1,3,5,7,9

*/

var range = 10
var output =''
for (let i = 0; i < range; i++) {
if (!(i % 2 === 0)) {
    output+= i   
}    
}
console.log(output) 



//funtion to sum all the values between 1 to n 
//and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, i need the sum !! 


var inputNumber = 9
var sumValue = addNumbers(inputNumber)
console.log(sumValue) 
function addNumbers(inputVal) {
    var outputVal = 0
    var sequence = ""
for (let j = 0; j <= inputVal; j++) {
    outputVal+= j 
    sequence+= j
}    
return("The total sum of value of sequence - " + sequence + " = " + outputVal)
}
