//connecting javascript and html to create intended effects requires knowing how to SELECT elements and MANIPULATE them with logic.  The following elements will need to be SLECTED in order to be MANIPULATED


//play game screen this element changes text to display each of the questions in the array that will be written containting a nested object for each question with a questions and a correct answer
var question = document.getElementById("question");

//on play game screen - each #question has a list of multiple choice (li tags): one is correct and 2 are wrong - this element will need to change with hover over, and trigger and event to decide correct or incorrect and loop to the next question or end game if all questions have been looped through
var lis = document.querySelectorAll("li");

//on the all done screen the game is back in game over mode and this screen indicates the user answered all questions before the timer ran out - this screen has a span - the logic will have to store the score in an object and return this value to display in the span that starts as 0
var score = document.getElementsByClassName("score");

//the all done screen also has a form with a text box for user input - the value entered here needs to be stored and returned later when the highscore screen is displayed
var initials = document.getElementsByClassName("user-input");

//the all done screen has a button labeled <enter initals> and the score and initials provided by the user should be saved to the object which will populate data in the highscore table
var saveButton = document.getElementById("save-data");

//the highscore screen can be entered from the title page or is displayed after the all done screen has been handled by the user - this screen is always in a game over state it has a table which will display data after calling the highscore object which saves all highscore/initial pairs entered
var tds = document.querySelectorAll("td");

//also on the highscore screen is a button labeled clear all data which clears the table and presumably the data stored in the high score object
var clear = document.getElementById("#clear-all");


//timer logic SELECT and MANIPULATE
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

    var secondsLeft = 60;

    function setTime() {
      var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "timer: " + secondsLeft ;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          sendMessage();
        }
    
      }, 1000);
    }
    function sendMessage() {
        var gameOver = document.createElement("div");
        gameOver.innerHTML = "<p>GAME OVER!</p>";
    }
    setTime();



var quizQuestions = [
    {
        question: "Why do JavaScript and Java have similar names?",
        answers: {
          a:  "JavaScript is a stripped-down version of Java", 
          b:  "JavaScript's syntax is loosely based on Java's",
          c: "They both originated on the island of Java" 
        },
        correctAnswer: "b"
    },
    {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        answers: {
            a: "The User's machine running a Web browser", 
            b: "The Web server",
            c: "central machine deep within Netscape's corporate offices"
        },
        correctAnswer: "a"
    },
    {
        question: " ______ JavaScript is also called client-side JavaScript",
        answers: {
            a: "Microsoft", 
            b: "Navigator",
            c: "LiveWire"
        },
        correctAnswer: "b"

    },
    {
        question: " What are variables used for in JavaScript Programs?",
        answers: {
            a: " Storing numbers, dates, or other values", 
            b: "Varying randomly",
            c: "Causing high-school algebra flashbacks"
        },
        correctAnswer: "a"

    },
    {
        question: " What is the correct JavaScript syntax to write 'Hello World'?",
        answers: {
            choice1: " System.out.println('Hello World')", 
            choice2: "println ('Hello World')",
            choice3: "document.write('Hello World')" 
        },
        correctAnswer: "c"

    },



]


