var seaImage,sea;
var ship,shipImage;

function preload(){
seaImage = loadImage("sea.png")
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(600,600);
  
  sea = createSprite(400,400)
  sea.addImage("sea",seaImage)
  sea.scale = 0.5
  sea.velocityX = -2

  ship = createSprite(400,400)
  ship.addAnimation("ship",shipImage)
  ship.scale = 0.5
}

function draw() {
 if(sea.x < 0){
  sea.x = sea.width/8
 }
 
  drawSprites()
}