const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var score = 0;


function preload(){
  me();
}
function setup() {
  

  createCanvas(800,400);
 
  engine = Engine.create();
    world = engine.world;

 launcher = new Launch(120,260,25,25);
chain = new Slingshot(launcher.body,{x:120, y:260});

 g1 = new Ground(360,330,250,15);
 g2 = new Ground(650,250,175,15);

 //level 1


 b1 = new Box(290,300,30,30);

 b2 = new Box(320,300,30,30);
 
 b3 = new Box(350,300,30,30);
 
 b4 = new Box(380,300,30,30);

 b5 = new Box(410,300,30,30);

 b6 = new Box(440,300,30,30);
 
//level 2

b7 = new Box(305,250,30,30);

b8 = new Box(335,250,30,30);

b9 = new Box(365,250,30,30);

b10 = new Box(395,250,30,30);

b11 = new Box(425,250,30,30);


//level 3

b1s = new Box(320,220,30,30);

b2s = new Box(350,220,30,30);

b3s = new Box(380,220,30,30);

b4s = new Box(410,220,30,30);

//level 4

b5s = new Box(335,180,30,30);

b6s = new Box(365,180,30,30);

b7s = new Box(395,180,30,30);


//level 5

b8s = new Box(350,160,30,30);

b9s = new Box(380,160,30,30);


//level 6
b10s = new Box(365,120,30,30);


//level 1.0
b1a = new Box(600,220,30,30);

b2a = new Box(630,220,30,30);

b3a = new Box(660,220,30,30);

b4a = new Box(690,220,30,30);


//level 1.2

b5a = new Box(615,190,30,30);

b6a = new Box(645,190,30,30);

b7a = new Box(675,190,30,30);


//level 1.3

b8a = new Box(630,160,30,30);

b9a = new Box(660,160,30,30);


//level 1.4
b10a = new Box(645,130,30,30);

 Engine.run(engine);
}

function draw() {
  if (backgroundImg)
  background(backgroundImg); 
  noStroke();
  textSize(25);
  fill("white");
  text("Score: "+score, 650, 40);
  g1.display();
  g2.display();
  
  b1.display();
  b1.score();
  b2.display();
  b2.score();
  b3.display();
  b3.score();
  b4.display();
  b4.score();
  b5.display();
  b5.score();
  b6.display();
  b6.score();
 
 b7.display();
 b7.score();
 b8.display();
 b8.score();
 b9.display();
 b9.score();
 b10.display();
 b10.score();
 b11.display();
 b11.score();
 
 b1s.display();
 b1s.score();
 b2s.display();
 b2s.score();
 b3s.display();
 b3s.score();
 b4s.display();
 b4s.score();
 
 b5s.display();
 b5s.score();
 b6s.display();
 b6s.score();
 b7s.display();
 b7s.score();

 b8s.display();
 b8s.score();
 b9s.display();
 b9s.score();

 b10s.display();
 b10s.score();

 b1a.display();
 b1a.score();
 b2a.display();
 b2a.score();
 b3a.display();
 b3a.score();
 b4a.display();
 b4a.score();

 b5a.display();
 b5a.score();
 b6a.display();
 b6a.score();
 b7a.display();
 b7a.score();

 b8a.display();
 b8a.score();
 b9a.display();
 b9a.score();

 b10a.display();
 b10a.score();

 launcher.display();

 chain.display();
  drawSprites();
}
function mouseDragged(){
 
      Matter.Body.setPosition(launcher.body, {x: mouseX , y: mouseY});
  
}

function mouseReleased(){
  chain.fly();
 
}

function keyPressed(){
  if (keyCode === 32){
    chain.attach(launcher.body);
  }
 
}

async function me(){

  var data = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var dos = await data.json();
  var date = dos.datetime;

  var hour = date.slice(11, 13);
  console.log(hour);

  if (hour >= 06 &&  hour <= 18){
     bg = "1/bg.png";

  }
  else{
      bg = "1/bg2.jpg";
  }
  backgroundImg = loadImage(bg);
}