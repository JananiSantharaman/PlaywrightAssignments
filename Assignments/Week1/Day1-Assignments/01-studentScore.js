
/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result

//grading input
/60–100	A
50–59	B
40–49	C
<40	F
*/
const studentScore = 100
var grade = calculateGrade(studentScore)
console.log(grade)
//function
function calculateGrade(score) {
    if ((typeof score === "number") && (score <= 100)) {
        switch (true) {
            case (score >= 60 && score <= 100):
                return "Student grade is - A"
                break;
            case (score >= 50 && score <= 59):
                return "Student grade is - B"
                break;
            case (score >= 40 && score <= 49):
                return "Student grade is - C"
                break;
            default: (score < 40)
                return "Student grade is - D"
                break;
        }
    } else {
        return "Please enter a valid score"
    }
}
