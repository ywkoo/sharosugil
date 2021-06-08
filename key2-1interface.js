class Key21interface {
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
    for(let i = 0; i < 5; i++) {
      rect(100 * i + 60, 400, 90, 200, 15, 15, 15 ,15);
    }

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
    text("메뉴 카테고리를 정해주세요!", 300, 250);
    text("과감하게 골라주세요 :)", 300, 290);
    //단계 텍스트
    textSize(28);
    text(this.stageNumber + " / 10", 300, 850);
    text("한식", 105, 500);
    text("일식", 205, 500);
    text("중식", 305, 500);
    text("양식", 405, 500);
    text("아시안", 505, 500);
  }
  
  over() {
    if(mouseX > 60 && mouseX < 150 && mouseY > 400 && mouseY < 600) {
      return "Kr";
    } else if(mouseX > 160 && mouseX < 250 && mouseY > 400 && mouseY < 600) {
      return "Jp"; 
    } else if(mouseX > 260 && mouseX < 350 && mouseY > 400 && mouseY < 600){
      return "Ch"; 
    } else if(mouseX > 360 && mouseX < 450 && mouseY > 400 && mouseY < 600){
      return "Wst";
    } else if(mouseX > 460 && mouseX < 550 && mouseY > 400 && mouseY < 600) {
      return "Asian";
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