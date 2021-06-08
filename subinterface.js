class Subinterface {
  constructor(_stageNumber, _time, _image, _question, _answer) {
    this.stageNumber = _stageNumber;
    this.time = _time;
    this.image = _image;
    this.question = _question;
    this.answer = _answer;
  }

  display(font, fail) {
    textFont(font);
    //상단 바
    fill(220, 142, 133);
    rect(0, 0, 600, 80);
    noStroke();
    //질문
    fill(225, 199, 173);
    rect(100, 200, 400, 350);
    //답변
    fill(255);
    rect(100, 600, 400, 80, 15, 15, 15, 15);
    rect(100, 700, 400, 80, 15, 15, 15, 15);
    //게이지
    fill(255);
    rect(60, 110, 460, 20, 20, 20, 20, 20);
    fill(141, 135, 135);
    rect(60, 110, map(this.time, 0, 8000, 10, 440, true), 20, 20, 0, 0, 20);
    this.time -= 40;
    if(this.time == 0) {
      stage = 12;
    }
    //캐릭터
    image(this.image, 30, 120, 220, 200);

    //텍스트
    textAlign(CENTER);
    noStroke();
    //상단바 텍스트
    fill("black");
    textSize(30);
    text("샤로수길 밥약지킴이", 300, 50);
    textSize(16);
    text("with @snu_foodfighter", 510, 70);
    //질문 텍스트
    textSize(30);
    text("질문 " + this.stageNumber, 300, 300);
    textSize(24);
    text(this.question[0], 300, 400);
    text(this.question[1], 300, 450);
    //답변 텍스트
    textSize(24);
    text(this.answer[0], 300, 650);
    text(this.answer[1], 300, 750);
    //단계 텍스트
    textSize(28);
    text(this.stageNumber + " / 10", 300, 850);
  }
  
  over() {
    if(mouseX > 100 && mouseX < 500 && mouseY > 600 && mouseY < 680) {
      return true;
    } else if(mouseX > 100 && mouseX < 500 && mouseY > 700 && mouseY <780) {
      return false;
    } 
  }
  
  showAnswer() {
    if(this.over() == true) {
      fill(200);
      rect(100, 600, 400, 80, 15, 15, 15, 15);
      fill('black');
      textSize(28);
      text(this.answer[0], 300, 650);
    } else if(this.over() == false) {
      fill(200);
      rect(100, 700, 400, 80, 15, 15, 15, 15);
      fill('black');
      textSize(28);
      text(this.answer[1], 300, 750);
    }
  }
}
