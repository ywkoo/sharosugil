class Key1interface {
  constructor(_stageNumber, _image1, _image2, _image3, _image4) {
    this.stageNumber = _stageNumber;
    this.image1 = _image1;
    this.image2 = _image2; 
    this.image3 = _image3;
    this.imgae4 = _image4;
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
    // if(mouseX > 380 && mouseX < 460 && mouseY > 350 && mouseY < 540) {
    //   image(this.image4, 320, 350, 200, 200);
    // } else {
    //   image(this.image3, 320, 350, 200, 200);
    // }
    // if(mouseX > 310 && mouseX < 390 && mouseY > 200 && mouseY < 390) {
    //   image(this.image2, 200, 570, 200, 200);
    // } else {
    //   image(this.image1, 200, 570, 200, 200);
    // }

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
    text("함께 할 샤로수길 프렌드를 골라주세요.", 300, 250);
    text("(식사유형을 고르시면 돼요!)", 300, 290);
    //단계 텍스트
    textSize(28);
    text(this.stageNumber + " / 10", 300, 850);
    text("밥", 180, 390);
    text("술", 480, 410);
    text("카페", 380, 700);
  }
  
  over() {
    if(mouseX > 125 && mouseX < 295 && mouseY > 405 && mouseY < 540) {
      return "meal";
    } else if(mouseX > 380 && mouseX < 465 && mouseY > 360 && mouseY < 580) {
      return "drink"; 
    } else if(mouseX > 200 && mouseX < 330 && mouseY > 590 && mouseY < 790){
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