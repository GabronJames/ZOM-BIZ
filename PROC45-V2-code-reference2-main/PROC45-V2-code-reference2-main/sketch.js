var bg,bgImg;
var player, shooterImg, shooter_shooting,SEÑORMUERTO;
var Bala,BalaSprite
var zombies,zombieSprite
var matrizdezombies,matrizdebalas

function preload(){
  
  shooterImg = loadImage("assets/SEÑOR.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  Bala = loadImage("assets/BALAS.png")
  bgImg = loadImage("assets/PLANTAS VS ZOMBIES FONDO.png")
 zombies = loadImage("assets/zombie.png")
 SEÑORMUERTO = loadImage("assets/SEÑORMUERTO.png")
}

function setup() {

  createCanvas(windowWidth,windowHeight);

   //adding the background image
   bg = createSprite(displayWidth/2,displayHeight/2 -70,100,100)
   bg.addImage(bgImg)
   bg.scale = 1.35
   
//creating the player sprite
player = createSprite(displayWidth-1355, displayHeight-400, 50, 50);
player.debug = true  
player.addImage(shooterImg)
  player.scale = 0.7
  player.setCollider("rectangle",0,0,50,100)
matrizdezombies=new Group()
matrizdebalas=new Group()
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-10
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+10
}

if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-10
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 player.x = player.x+10
}



//release bullets and change the image of shooter to shooting position when space is pressed
if(keyDown("space")){
  BalaSprite = createSprite(player.x +200,player.y)
  BalaSprite.scale = 0.4
  BalaSprite.addImage("balaimg",Bala)
  BalaSprite.velocityX = 200
  BalaSprite.debug = true
  BalaSprite.setCollider("circle",0,0,10,)
  BalaSprite.lifetime = 3
  matrizdebalas.add(BalaSprite)
}

//player goes back to original standing image once we stop pressing the space bar
createzombies();
drawSprites();
 
matrizdezombies.collide(matrizdebalas)//CONDUCIOn
if(matrizdezombies.collide(player)){
  player.addImage(SEÑORMUERTO)
player.changeImage(SEÑORMUERTO) 

if(keyDown("UP_ARROW")||touches.length>0){
  player.y = displayHeight-400
  
}

if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = displayHeight-400
}

if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = displayWidth-1355
}

if(keyDown("RIGHT_ARROW")||touches.length>0){
 player.x = displayWidth-1355
}


}
}

function createzombies(){
  if(frameCount%30===0){

    zombieSprite = createSprite(displayWidth-40,Math.round(random(0,displayHeight)),0,)
    zombieSprite.addImage("zombieimg",zombies)
    zombieSprite.scale = 0.3
    zombieSprite.velocityX = -7
    zombieSprite.lifetime = 230
    matrizdezombies.add(zombieSprite) 
}

}