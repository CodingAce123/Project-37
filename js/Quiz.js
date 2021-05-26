class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  question.hide();
  background("Orange");
  textSize(30);
  text("Result of the Quiz!!!",400,50);
  text("---------------------------",397, 65);
  Contestant.getPlayerInfo();
  if(allContestants !== undefined){
      var display_Answers = 260;
      fill("Blue");
      textSize(22);
      text("*NOTE*: The People who Gave Correct Answers are Highlighted in Green Color!!!",85,260);

  for(var plr in allContestants){
    var correctAns = "3";
    if (correctAns === allContestants[plr].answer)
    fill("Green")
  else
    fill("Red");

    display_Answers+=30;
    textSize(22);
    text(allContestants[plr].name + ": " + allContestants[plr].answer,90,display_Answers)
   }
  }
 }
}
