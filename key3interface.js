class Key3interface {
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
    rect(100, 400, 195, 150,15 ,15, 15, 15);
    rect(305, 400, 195, 150,15 ,15, 15, 15);
    rect(100, 560, 195, 150,15 ,15, 15, 15);
    rect(305, 560, 195, 150,15 ,15, 15, 15);

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
    text("분위기도 중요하죠", 300, 250);
    text("어떤 느낌의 식사자리인가요?", 300, 290);
    //단계 텍스트
    textSize(22);
    text(this.stageNumber + " / 10", 300, 850);
    text("먹는 데에만 집중", 200, 475);
    text("편하게 얘기하기", 400, 475);
    text("무려 데이트", 200, 630);
    text("약간 어색함을 곁들인", 400, 630);
  }
  
  over() {
    if(mouseX > 100 && mouseX < 295 && mouseY > 400 && mouseY < 550) {
      return "a";
    } else if(mouseX > 305 && mouseX < 500 && mouseY > 400 && mouseY < 550) {
      return "b"; 
    } else if(mouseX > 100 && mouseX < 295 && mouseY > 555 && mouseY < 705){
      return "c"; 
    } else if(mouseX > 305 && mouseX < 500 && mouseY > 555 && mouseY < 705) {
      return "d";
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