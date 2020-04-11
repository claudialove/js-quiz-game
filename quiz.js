//declare variables to select
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var gameOver = false;

var quizCard = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var nextButton = document.getElementById('nextButton');
var result = document.getElementById('#result');
var display = document.getElementById('#display');


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
          window.location.href = "index.html";
          gameOver = true;
          return;
        }
    
      }, 1000);
    }
    function sendMessage() {
      //game over displays but doesnt not stop game play
        timeEl.textContent = "Game Over! ";
      };
      //timer counts down but does not decrement if a wrong answer is picked - i work too slowly and had to choose to leave this out
      setTime();

   //see question.js file for question array
    
    //questions logic loop through
      function loadQuestion (questionIndex) {
        var q = questions[questionIndex];
        questionEl.textContent = (questionIndex + 1) + '. ' + q.question; 
        opt1.textContent = q.option1;
        opt2.textContent = q.option2;
        opt3.textContent = q.option3;
       };
   
       function loadNextQuestion() {
           var selectedOption = document.querySelector('input[type=radio]:checked');
           if(!selectedOption) {
               alert('Please select your answer!');
               return;
           }
           var answer = selectedOption.value;
           if(questions[currentQuestion].answer == answer) {
             score += 10;
             alert("Correct!" + " Current score is: " + score + " points");
       } else {
        alert("Wrong!" + " Current score is: " + score + " points");
       }
       selectedOption.checked = false;
       currentQuestion++;
       if (currentQuestion == totQuestions - 1) {
           nextButton.textContent = 'Finish';
       }
       if (currentQuestion == totQuestions) {
           window.location.href = "all-done.html";
           result.textContent = score;
           return;
       }
       loadQuestion(currentQuestion);
    }

loadQuestion(currentQuestion);

//there should be logic to store and handle the highscore table that can be seen, but again even with working around the clock i didnt get to it
    