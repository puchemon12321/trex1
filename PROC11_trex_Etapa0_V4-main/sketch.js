
var trex ,trex_running;
var edges;
var ground,grouding,invisible;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
grouding=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  //crear sprite de Trex
 trex=createSprite(50,160,20,50)
 trex.addAnimation("running",trex_running);
 trex.scale=0.7;
//piso
ground=createSprite(180,180,600,20);
ground.addImage(grouding)
invisible=createSprite(200,190,600,10)
invisible.visible=false
 edges=createEdgeSprites();
}

function draw(){
  background(220)
  ground.velocityX=-2;
  //regeneracion de piso
if(ground.x < 0){
 ground.x=ground.width/2
}
  if(keyDown("space") && trex.y >= 100){
  trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.8  
  trex.collide(invisible);
  
drawSprites();
}
