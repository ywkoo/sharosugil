class Key22interface {
  constructor(_stageNumber, _image) {
    this.stageNumber = _stageNumber;
    this.image = _image;
  }

  display(font) {
    textFont(font);
    //상단 바
    fill(220, 142, 133);
    rect(0, 0, 600, 80);
    noStroke();
    //질문
    fill(225, 199, 173);
    rect(100, 130, 400, 200);
    //답변
    fill(255);
    ellipse(180, 480, 200, 200);
    ellipse(420, 480, 200, 200);
    ellipse(300, 700, 200, 200);

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
    text("질문 " + this.stageNumber, 300, 190);
    textSize(24);
    text("같이 할 샤로수길 프렌드를 골라주세요.", 300, 250);
    text("(식사유형을 고르시면 돼요!)", 300, 290);
    //단계 텍스트
    textSize(28);
    text(this.stageNumber + " / 10", 300, 850);
  }
  
  over() {
    if(mouseX > 80 && mouseX < 280 && mouseY > 380 && mouseY < 580) {
      return "meal";
    } else if(mouseX > 320 && mouseX < 520 && mouseY > 380 && mouseY < 580) {
      return "drink"; 
    } else if(mouseX > 200 && mouseX < 400 && mouseY > 700 && mouseY < 800){
      return "cafe"; 
    }
  }
  
//   showAnswer() {
//     if(this.overSub() == true) {
//       fill(200);
//       rect(100, 600, 400, 80, 15, 15, 15, 15);
//       fill('black');
//       textSize(28);
//       text(this.answer[0], 300, 650);
//     } else if(this.overSub() == false) {
//       fill(200);
//       rect(100, 700, 400, 80, 15, 15, 15, 15);
//       fill('black');
//       textSize(28);
//       text(this.answer[1], 300, 750);
//     }
//   }
}