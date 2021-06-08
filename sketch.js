let final;

//stage 값 저장
let stage = 0;
let time = 8000;
let fail = false;
let change = true;

//질문 목록
let keyQ = [];
let subQ = [
  ["맛집을 찾았는데 웨이팅이 있다.", "어떻게 해야 할까?"],
  ["나에겐 사실 비밀 아지트 카페가 있다.", "어떤 느낌일까?"],
  ["불현듯 스치는 의문.", "나의 잔고 사정은?"],
  ["내겐 도저히 참을 수 없는 음식이 있다.", "그것은 바로...!"],
  ["식당에 있는 물에서 은은한 맛이 난다.", "어떤 맛일까?"],
  ["오늘 날씨면... 좀 걸어도 괜찮나?.", "거리도 생각해야지 싶다"],
];

//답변 목록
let keyA = [];
let subA = [
  ["쌉가능", "다른 곳"],
  ["나만의 작은 카페", "넓은 프랜차이즈 카페"],
  ["괜춘", "ㅎㅎ.."],
  ["민초는 좀...", "하와이안 피자"],
  ["라임", "보리"],
  ["되도록 코앞", "좀 멀어도 맛있다면 괜찮"],
];

//배열 조작 변수
let overValue = true;
let randomNumKey;
let randomNumSub = Math.floor(Math.random() * subQ.length);

//interface 배열
let sub = [];

//이미지, 폰트
let imgdrink1;
let imgdrink2;
let imgcafe1;
let imgcafe2;
let imgmeal1;
let imgmeal2;
let img;
let imgv;
let font1;

//db 관련
let db;
let rowNum;
let colNum;
let names = [];
let scores = [];

//답변 관련
let answer;
let numbers = [0, 1, 2, 3, 4, 5];
let number = Math.floor(Math.random() * numbers.length);
let sol = numbers[number];
let final1;
let final2;

function preload() {
  img = loadImage("assets/kor.png");
  imgdrink1 = loadImage("assets/drink.png");
  imgdrink2 = loadImage("assets/drink.gif");
  imgmeal1 = loadImage("assets/meal.png");
  imgmeal2 = loadImage("assets/meal.gif");
  imgcafe1 = loadImage("assets/cafe.png");
  imgcafe2 = loadImage("assets/cafe.gif");
  font1 = loadFont("assets/night.ttf");
  font2 = loadFont("assets/dangdang.ttf");
  db = loadTable("assets/db.csv", "csv", "header");
}

function setup() {
  createCanvas(600, 900);
  rowNum = db.getRowCount();
  colNum = db.getColumnCount();
  for (let i = 0; i < rowNum; i++) {
    let name = db.get(i, "");
    names.push(name);
  }
  for (let i = 0; i < db.getRowCount(); i++) {
    scores[i] = 1;
  }
  noStroke();
  let interface = new Subinterface(4, time, img, subQ[number], subA[number]);
  sub[0] = interface;
  // numbers.splice(number, 1);
  // subQ.splice(number, 1);
  // subA.splice(number, 1);
  // number = Math.floor(Math.random() * numbers.length);
  // sol = numbers[number];
}

function draw() {
  background(234, 231, 213);

  switch (stage) {
    case 0:
      let interfaceZero = new Startinterface(stage, time, 1, 1);
      interfaceZero.display(font2, font1);
      image(imgdrink1, 180, 370, 250, 250);
      image(imgmeal1, 40, 370, 250, 250);
      image(imgcafe1, 320, 370, 250, 250);
      overValue = interfaceZero.over();
      break;
    case 1:
      let interfaceFirst = new Key1interface(stage, imgcafe1, imgcafe2, imgdrink1, imgdrink2);
      interfaceFirst.display(font1);
      if(mouseX > 380 && mouseX < 465 && mouseY > 360 && mouseY < 580) {
      image(imgdrink2, 300, 350, 250, 250);
    } else {
      image(imgdrink1, 300, 350, 250, 250);
    }
    if(mouseX > 200 && mouseX < 330 && mouseY > 590 && mouseY < 790) {
      image(imgcafe2, 130, 550, 250, 250);
    } else {
      image(imgcafe1, 130, 550, 250, 250);
    }
      if(mouseX > 125 && mouseX < 295 && mouseY > 405 && mouseY < 540) {
      image(imgmeal2, 90, 310, 250, 250);
    } else {
      image(imgmeal1, 90, 310, 250, 250);
    }
      overValue = interfaceFirst.over();
      break;
    case 2.1:
      let interfaceSecond1 = new Key21interface(2, img);
      interfaceSecond1.display(font1);
      overValue = interfaceSecond1.over();
      break;
    case 3:
      let interfaceThird = new Key3interface(3, img);
      interfaceThird.display(font1);
      overValue = interfaceThird.over();
      break;
    case 4:
      let interfaceFourth = sub[0];
      interfaceFourth.display(font1, fail);
      interfaceFourth.showAnswer();
      overValue = interfaceFourth.over();
      break;
    case 5:
      let interfaceFifth = sub[1];
      interfaceFifth.display(font1, fail);
      interfaceFifth.showAnswer();
      overValue = interfaceFifth.over();
      break;
    case 6:
      let interfaceSixth = sub[2];
      interfaceSixth.display(font1, fail);
      interfaceSixth.showAnswer();
      overValue = interfaceSixth.over();
      break;
    case 7:
      let interfaceSeventh = sub[3];
      interfaceSeventh.display(font1);
      interfaceSeventh.showAnswer();
      overValue = interfaceSeventh.over();
      break;
    case 8:
      let interfaceEighth = sub[4];
      interfaceEighth.display(font1);
      interfaceEighth.showAnswer();
      overValue = interfaceEighth.over();
      break;
    case 9:
      let interfaceNineth = sub[5];
      interfaceNineth.display(font1);
      interfaceNineth.showAnswer();
      overValue = interfaceNineth.over();
      break;
    case 10:
      textFont(font1);
      textAlign(CENTER);
      textSize(24);
      text("Loading...", 300, 430);
      if(time == 0) {
        stage += 1;
      } 
      time -= 100;
      break;
    case 11:
      textAlign(CENTER);
      fill('black');
      textSize(24);
      text("지금 당신의 샤로수길은", 300, 300);
      if(change == true) {
      let result1 = findMax(scores);
      let variable1 = result1[floor(random(result1.length))];
      final1 = db.get(variable1, "");
      change = !change;
      }
      textSize(40);
      text("' "+ final1 + " '", 300, 400);
      fill(225, 199, 173);
      rectMode(CENTER);
      rect(300, 470, 150, 70);
      textSize(20);
      fill(0);
      text("가게정보 ->", 300, 475);
      break;
    case 12:
      textAlign(CENTER);
      fill('black');
      textSize(24);
      text("어설픈 자는 여기로 가라", 300, 300);
      if(change == true) {
      let result2 = findMax(scores);
      let variable2 = result2[floor(random(result2.length))]; 
      final2 = db.get(variable2, "");
      change = !change;
      }
      // let result1 = Math.max.apply(null, scores);
      // let index1 = scores.indexOf(result1);
      // final1 = db.get(index1, "");
      textSize(40);
      text("' "+ final2 + " '", 300, 400);
      fill(225, 199, 173);
      rectMode(CENTER);
      rect(300, 470, 150, 70);
      textSize(20);
      fill(0);
      text("가게정보 ->", 300, 475);
      break;
  }
}

function mousePressed() {
  if (stage == 0) {
    if (overValue == true) {
      stage += 1;
    }
    
    
  } else if (stage == 1) {
    if (overValue == "meal") {
      answer = "K1meal";
      stage += 1.1;
    } else if (overValue == "drink") {
      answer = "K1drink";
      stage += 2;
    } else if (overValue == "cafe") {
      answer = "K1cafe";
      stage += 2;
    }
    for (let i = 0; i < rowNum; i++) {
      let index = db.get(i, answer);
      scores[i] *= index;
    }
    
    
  } else if (stage == 2.1) {
    if (overValue == "Kr") {
      answer = "K2Kr";
      for (let i = 0; i < rowNum; i++) {
      let index = db.get(i, answer);
      scores[i] *= index;
      }
      stage = 3;
    } else if (overValue == "Ch") {
      answer = "K2Ch";
      for (let i = 0; i < rowNum; i++) {
      let index = db.get(i, answer);
      scores[i] *= index;
      }
      stage = 3;
    } else if (overValue == "Jp") {
      answer = "K2Jp";
      for (let i = 0; i < rowNum; i++) {
      let index = db.get(i, answer);
      scores[i] *= index;
      }
      stage = 3;
    } else if (overValue == "Wst") {
      answer = "K2Wst";
      for (let i = 0; i < rowNum; i++) {
      let index = db.get(i, answer);
      scores[i] *= index;
      }
      stage = 3;
    } else if (overValue == "Asian") {
      answer = "K2Asian";
      for (let i = 0; i < rowNum; i++) {
      let index = db.get(i, answer);
      scores[i] *= index;
      }
      stage = 3;
    }
    for (let i = 0; i < rowNum; i++) {
      let index = db.get(i, answer);
      scores[i] *= index;
    }
    
    
  } else if (stage == 3) {
    if (overValue == "a") {
      answer = "K3a";
      for (let i = 0; i < rowNum; i++) {
      let index = db.get(i, answer);
      scores[i] *= index;
      }
      stage = 4;
    } else if (overValue == "b") {
      answer = "K3b";
      for (let i = 0; i < rowNum; i++) {
      let index = db.get(i, answer);
      scores[i] *= index;
      }
      stage = 4;
    } else if (overValue == "c") {
      answer = "K3c";
      for (let i = 0; i < rowNum; i++) {
      let index = db.get(i, answer);
      scores[i] *= index;
      }
      stage = 4;
    } else if (overValue == "d") {
      answer = "K3d";
      for (let i = 0; i < rowNum; i++) {
      let index = db.get(i, answer);
      scores[i] *= index;
      }
      stage = 4;
    }
    
    
  } else if (stage >= 4 && stage < 10) {
    if (overValue == true) {
      answer = "S" + (sol + 1) + "a";
      for (let i = 0; i < rowNum; i++) {
      let index = db.get(i, answer);
      scores[i] *= index;
      }
      subQ.splice(number, 1);
      subA.splice(number, 1);
      numbers.splice(number, 1);
      number = Math.floor(Math.random() * subQ.length);
      sol = numbers[number];
      let newInterface = new Subinterface(
        stage + 1,
        time,
        img,
        subQ[number],
        subA[number]
      );
      sub.push(newInterface);
      stage += 1;
    } else if (overValue == false) {
      answer = "S" + (sol + 1) + "b";
      for (let i = 0; i < rowNum; i++) {
        let index = db.get(i, answer);
        scores[i] *= index;
      }
      subQ.splice(number, 1);
      subA.splice(number, 1);
      numbers.splice(number, 1);
      number = Math.floor(Math.random() * subQ.length);
      sol = numbers[number];
      let newInterface = new Subinterface(
        stage + 1,
        time,
        img,
        subQ[number],
        subA[number]
      );
      sub.push(newInterface);
      stage += 1;
    }
    
  } else if (stage == 11 || stage == 12) {
    if(mouseX > 225 && mouseX < 375 && mouseY > 435 && mouseY < 505) {
      window.location.href = 'https://map.naver.com/v5/search/%EC%83%A4%EB%A1%9C%EC%88%98%EA%B8%B8?c=14132192.5769559,4506019.0634345,15,0,0,0,dh';
    }
  }
}

function findMax(arr) {
    var max = -Infinity;
    var maxIndices = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === max) {
          maxIndices.push(i);
        } else if (arr[i] > max) {
            maxIndices = [i];
            max = arr[i];
        }
    }
    return maxIndices;
 }
