class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here...");
    this.input2 = createInput("Enter Correct Option No...");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("Aaryan's Quiz Game");
    this.title.position(400, 0);

    this.question.html("Question:- I have keys, but no locks and space, and no rooms. You can enter, but you can’t go outside. What am I?" );
    this.question.position(100, 80);

    this.option1.html("1: A Keypad " );
    this.option1.position(100, 110);

    this.option2.html("2: A Calculator" );
    this.option2.position(100, 140);

    this.option3.html("3: A Keyboard " );
    this.option3.position(100, 170);

    this.option4.html("4: A Door" );
    this.option4.position(100, 200);

    this.input1.position(100, 260);
    this.input2.position(350, 260);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
