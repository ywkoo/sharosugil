class Startinterface {
  constructor(_stageNumber, _time, _image1, _image2) {
    this.stageNumber = _stageNumber;
    this.time = _time;
    this.image1 = _image1;
    this.image2 = _image2;
  }
  
  display(a, b) {
    textAlign(CENTER);
    //제목
    fill('black');
    textFont(a);
    textSize(80);
    text("샤로수길", 300, 200);
    text("밥약지킴이", 300, 300);
    //조이름
    textFont(b);
    textSize(48);
    if(mouseX > 250 && mouseX < 350 && mouseY > 660 && mouseY < 740) {
      fill(0);
    } else {
      fill(196, 110, 100);
    }
    text("시작!", 300, 710);
    textSize(16);
    // text("정보문화기술입문 Final Project", 150, 800);
    // text("9조 구영완 권정연", 470, 800);
    // text("김소은 정문혜", 484, 820);
  }  
  
  over() {
    if(mouseX > 250 && mouseX < 350 && mouseY > 660 && mouseY < 740) {
      return true;
    }
  }
}