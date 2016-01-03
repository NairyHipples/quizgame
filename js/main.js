var questions = [
  ['1. What is 1+0', 'ett'],
  ['2. What is 1+1', 'två'],
  ['3. What is 1+2', 'tre']

];

//Set the correct answers to 0, because we're assuming
//that the player haven't answered questions when she/he starts the Quiz.
var correctAnswers = 0;
var wrongAnswers = 0;
var question;
var answer;
var userAnswer;
var result;

//Declaring empty arrays to fill with the right answers.
var correct = [];

//Or the wrong answers.
var wrong = [];

var html;

/************FUNCTIONS*************
**********************************/
//Here is my function to display the end results of my Quiz.
//I will call this function when the Quiz is completed.
function print(result){
  //I need to grab my div with the ID called endResult.
  var endResultDiv = document.getElementById('endResult');

  //I then grab my div called endResult, and change the
  //innerHTML of it, to display the result of the Quiz.
  endResultDiv.innerHTML = result;

}

//When the game is over, I want to show the player which
//questions she/he got wrong. Since it won't exist on the page beforehand,
//I need to create it on the spot when the game is over.
//---------Here is the function for that--------
function createAnswerList(arr){
  //Adding the starting unordered list tag
  var listHTML = '<ul>';
  //We want the loop to keep on building list items
  //Until we've gone through all questions in our 'questions' array.
  for (var i = 0; i < arr.length; i += 1){
    listHTML += '<li>' + arr[i] + '</li>'
    /* The code below is for adding what the answer
    was, aswell as the users own answer:
    + '<p>The answer was: <strong>'
    + questions[i][1]
    + '</strong>.</p>'
    + '<p>You answered: <strong>'
    + userAnswer
    + '</strong>.</p>';*/
  }
  //Adding the last unordered list tag
  listHTML += '</ul>';
  //This function returns all the information we have
  //stored in the 'listHTML' variable.
  return listHTML;
}

//A button for restarting the Quiz.
$('#restartQuizButton').click(function() {
  window.location.reload();
});


/************LOOPS*************
******************************/
for (var i = 0; i < questions.length; i += 1){
  /*To get the question, I go to my array called 'questions'
  and grab the current array with [i], and go into
  the actual question with [0], since I've created the array
  to hold the question for the Quiz in the first position in the array.*/
  question = questions[i][0];

  /*To get the answers, I go to the same array like I did above.
  To get the answer for the question, I type [1] to grab my
  programmed correct answer for said question.*/
  answer = questions[i][1];

  //Added prompt method for easy check if it works.
  userAnswer = prompt(question);

  //Now I'm going to check if the userAnswer equals to my programmed answer.
  if (userAnswer === answer){
    //If they get it right, I will give them 1 point towards the score.
    correctAnswers += 1;

    /*If they were right, I need to push the answer
    into the 'correct' array.*/
    correct.push(question);

  } else if (userAnswer === null){
    /*If they didn't type anything in the field, I will Set
    their answer to 'Nothing', to prevent my createAnswerList function
    to say 'Null'.

    [Uncomment code snippet below for activation]*/
    userAnswer = 'Nothing';
    wrongAnswers += 1;
    wrong.push(question);


  } else {
    /*If they're wrong, I need to push their answer
    into my 'wrong' array to keep track of their wrong answers.*/
    wrongAnswers += 1;
    wrong.push(question);

  }
  /*To prevent error message: "Cannot read property 'toLowerCase' of null"
  I add .toLowerCase() on userAnswer down here. This works with my 'Nothing'
  string when activated in the else if clause above.*/
  userAnswer = userAnswer.toLowerCase();
}

html = "<p>You got " + correctAnswers + " question(s) right.</p>";
html += "<p>You got " + wrongAnswers + " question(s) wrong.</p>";
//I want a function that checks if the user didn't get any questions right
//or didn't get any wrong, I do not want to post that information
//in the end screen.
if (wrong.length === 0) {
  html += '<h2>You all of got these questions right:</h2>';
  html += createAnswerList(correct);

} else if (correct.length === 0) {
  html += '<h2>These were the questions you got wrong:</h2>';
  html += createAnswerList(wrong);

} else {
  html += '<h2>Question(s) that you got right:</h2>';
  html += createAnswerList(correct);
  html += '<h2>The question(s) you got wrong:</h2>';
  html += createAnswerList(wrong);

}

//Here I call my print function to print what is stored
//in my html variable above.
// html += '<h2>You got these questions right:</h2>';
// html += createAnswerList(correct);
// html += '<h2>You got these questions wrong:</h2>';
// html += createAnswerList(wrong);
print(html);


//I used this to try my argument for the if statement in the print() function.
// var myArray = [];
// if (myArray.length === 0){
// console.log(myArray + 'Hey there!');
// }
