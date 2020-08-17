const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  

  createCanvas(800,400);
 
  engine = Engine.create();
    world = engine.world;

 launcher = new Launch(120,260,25,25);
chain = new Slingshot(launcher.body,{x:120, y:260});

 g1 = new Ground(360,330,250,15);
 g2 = new Ground(650,200,175,15);

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
b1a = new New(600,100,30,30);
b2a = new New(630,100,30,30);
b3a = new New(660,100,30,30);
b4a = new New(690,100,30,30);

//level 1.2

b5a = new New(615,50,30,30);
b6a = new New(645,50,30,30);
b7a = new New(675,50,30,30);

//level 1.3

b8a = new New(630,30,30,30);
b9a = new New(660,30,30,30);

//level 1.4
b10a = new New(645,10,30,30);
 Engine.run(engine);
}

function draw() {
  background(0); 
   
  g1.display();
  g2.display();
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
 
 b7.display();
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 
 b1s.display();
 b2s.display();
 b3s.display();
 b4s.display();
 
 b5s.display();
 b6s.display();
 b7s.display();

 b8s.display();
 b9s.display();

 b10s.display();

 b1a.display();
 b2a.display();
 b3a.display();
 b4a.display();

 b5a.display();
 b6a.display();
 b7a.display();

 b8a.display();
 b9a.display();

 b10a.display();

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