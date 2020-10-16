const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas;
var playerImg, cloudImg;
var player, clouds;

function preload(){
   playerImg = loadImage("images/running.png");
   player2 = loadImage("images/running left.png");
   cloudImg = loadImage("images/cloud.png");
   bg = loadImage("images/bg.png");
}
 
function setup(){
    canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;

    player = createSprite(100, 670, 100, 100);
    player.addImage("player", playerImg);
    player.scale = 0.2;

    clouds = createSprite(1330, random(100, 500), 30, 30);
    clouds.addImage("clouds", cloudImg);
    clouds.scale = 0.3;   
   // ground = new G(displayHeight-80, 720, displayWidth, 30);
  //  player = new P(displayHeight-700, 560, 170, 170);

    Engine.run(engine);
}

function draw(){
    background(bg);
    player.display();
   // clouds.display();
    
    if (keyDown(RIGHT_ARROW)){
        player.addImage("player", playerImg);
        player.x = player.x + 30;
        console.log(player.x);
    }
    if (keyDown(LEFT_ARROW)){
        player.addImage("player", player2);
        player.x = player.x - 30;
    }
   
       if (camera.position.x = player.x + 500){
       clouds.display();
       
       } 
      
        camera.position.y = displayHeight/2;
        }
      

