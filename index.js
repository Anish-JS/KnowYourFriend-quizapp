var readlineSync = require('readline-sync')
var score=0

var question_bank=[
  {
    question:"Which sport do I love?",
    answer:"Basketball"
  },
  {
    question: "What is my favourite dish?",
    answer:"Fish"
  },
  {
    question:"Where do I live?",
    answer:"Hyderabad"
  },
  {
    question:"Do I know to cook?",
    answer:"yes"
  },
  {
    question:"Which player do I consider the GOAT of basketball?",
    answer:"Kobe Bryant"
  },
    {
    question:"How old am I?",
    answer:"20"
  },
  {
    question:"Which car do I have?",
    answer:"Honda Amaze"
  }


]


var players=[]


var userName=readlineSync.question("What is your name? ")
console.log("Welcome to the Ultimate Quiz Show, "+userName)
console.log("How well do you know Anish? Let's find out\n");

function quizz(question,answer){
  var userAnswer=readlineSync.question(question);

  if(userAnswer.toLowerCase()===answer.toLowerCase()){
    console.log("You are right!")
    score++;
   
  }
  else {
    console.log("Oh you've answered wrong");
    score--;
  }

  console.log("You're running score is "+score+"\n")
   console.log("--------------------------")

}


for(i=0;i<question_bank.length;i++){
  quizz(question_bank[i].question,question_bank[i].answer)
}

console.log("your final score is "+score+" thank you for playing!")


