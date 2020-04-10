//connecting javascript and html to create intended effects requires knowing how to SELECT elements and MANIPULATE them with logic.

//the following elements will need to be SLECTED in order to be MANIPULATED

//on title screen this element is clicked to start the game which starts decrement of time
var startButton = document.getElementById("#start-button"); 

//play game screen this element changes text to display each of the questions in the array that will be written containting a nested object for each question with a questions and a correct answer
var question = document.getElementById("#question");

//on play game screen - each #question has a list of multiple choice (li tags): one i correct and 2 are wrong - this element will need to change with hover over, and trigger and event to decide correct or incorrect and loop to the next question or end game if all questionsed have been looped through
var lis = document.querySelectorAll("li");

//on play game screen a time displays and counts down the seconds in a minute, it continues this pace for correct answers and subntracts 10 seconds for wrong answers - when timer runs out the game is over
var timer = document.getElementById("#timer");

//on the all done screen the game is back in game over mode and this screen indicates the user answered all questions before the timer ran out - this screen has a span - the logic will have to store the score in an object and return this value to display in the span that starts as 0
var score = document.getElementsByClassName("score");

//the all done screen also has a form with a text box for user input - the value entered here needs to be stored and returned later when the highscore screen is displayed
var initials = document.getElementsByClassName("user-input");

//the all done screen has a button labeled <enter initals> and the score and initials provided by the user should be saved to the object which will populate data in the highscore table
var saveButton = document.getElementById("#save-data");

//the highscore screen can be entered from the title page or is displayed after the all done screen has been handled by the user - this screen is always in a game over state it has a table which will display data after calling the highscore object which saves all highscore/initial pairs entered
var tds = document.querySelectorAll("td")

//also on the highscore screen is a button labeled clear all data which clears the table and presumably the data stored in the high score object
var clear = document.getElementById("#clear-all");
