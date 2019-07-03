// Quiz Program
"use strict";

// Add Event Listener
document.getElementById("mark").addEventListener("click", markQuiz);

// Event Functions
function markQuiz() {
   // Initialize Score Variable
    let score = 0;
    
    // Mark questions
    score += markQuestion("q1", "A");
    score += markQuestion("q2", "B");
    score += markQuestion("q3", "C");
    score += markQuestion("q4", "D");
    
    // Output final score
    document.getElementById("score").innerHTML = score;
}

// Question FUnctions
function markQuestion(qNum, qAnswer) {
    let answer = document.getElementById(qNum + "Answer").value;
    if (answer == qAnswer) {
        document.getElementById(qNum + "Result").innerHTML = "Correct";
        document.getElementById(qNum + "Answer").style.backgroundColor = "green";
        document.getElementById(qNum + "Div").style.border = "2px solid green";
        return 1;
    } else {
        document.getElementById(qNum + "Result").innerHTML = "Incorrect";
        document.getElementById(qNum + "Answer").style.backgroundColor = "red";
        document.getElementById(qNum + "Div").style.border = "2px solid red";
        return 0;
    }
}
