var readlineSync = require("readline-sync");

var score=0;
var questions = [
  {
    question:"Who is the creator of AOT?",
    answer:"Ishayama"
  },
  {
    question:"Who do think is the protagonist?",
  answer:"Eren"
  },
  {
    question:"What does Eren fighting for?",
    answer:"Freedom"
  },
  {
    question:"what is the name of his island?",
    answer:"Paradise"
  },
  {
    question:"Racism vs Slavery, what does the show potrays more?",
    answer:"Racism"
  } 
]
function welcome()
{
  console.log("Welcome to the anime Quiz!!!");
  var userName = readlineSync.question("What is you name?");
  console.log("Welcome to the quiz session on AOT Anime "+userName);
}
function play(question,answer)
{
  var playerAns=readlineSync.question(question);
  if(answer.toUpperCase()==playerAns.toUpperCase())
  {
    console.log("Correct Answer!!!");
    score=score+1;
  }
  else{
    console.log("Wrong Answer");
  }

  console.log("Current Score: "+score);
  console.log("-------------")
}
function game()
{
  for(var i=0;i<questions.length;i++)
  {
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer);
      
  } 
}
function showScore()
  {
    console.log("Thanks for the participation");
    console.log("Your Final score is: "+score);
  }

welcome();
game();
showScore();