
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}
bobDiameter = this.radius;

function setup() {
 
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Ceiling(400,300,300,20);
    
    bob1 = new Bob(400,600,30);
    bob2 = new Bob(340,600,30);
    bob3 = new Bob(460,600,30);
    bob4 = new Bob(520,600,30);
    bob5 = new Bob(280,600,30);
    
    rope1 = new Rope(bob1.body,roof.body,-2,0);
    rope2 = new Rope(bob2.body,roof.body,-60,0);
    rope3 = new Rope(bob3.body,roof.body,60,0);
    rope4 = new Rope(bob4.body,roof.body,120,0);
    rope5 = new Rope(bob5.body,roof.body,-120,0);
	Engine.run(engine);
  
}
 

function draw() {
  rectMode(CENTER);
  background("white");

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}
keyPressed();
function keyPressed(){
	if (keyCode === LEFT_ARROW){
		Body.applyForce(bob5.body,bob5.body.position,{x:-0.2,y:0});
	}
}



