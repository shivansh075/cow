var PLAY = 1;
var END = 0;
var gameState = PLAY;
var flyingcow, flyingcowImg ;
var ground ;
var angrycow , angrycowImg ;
var lasercow , lasercowImg ;
var  okcow , okcowImg ;
var apple , appleImg;
var banana , bananaImg;
var rottenapple , rottenappleImg;
var rottenbanana , rottenbananaImg;
var strawberry , strawberryImg;
var rottenstrawberry , rottenstrawberryImg;
var grass , grassImg;
var jungle , jungleImg;
var trap , trapImg;
var restartbutton , restartbuttonImg;
var rottenbananagroup;
var bananagroup;
var applegroup;
var rottenapplegroup;
var strawberrygroup;
var rottenstrawberrygroup;
var trapgroup;
var grassgroup;
var health=0;
var diesound;

function preload(){

    jungleImg = loadImage("jungle.png");
    flyingcowImg = loadImage("flyingcow.png");
    okcowImg = loadImage("okcow.png");
    angrycowImg = loadImage("angrycow.png");
    lasercowImg = loadImage("lasercow.png");
    volcano1Img = loadImage("volcano1.png");
    volcano2Img = loadImage("volcano2.png");
    trapImg = loadImage("trap.png");
    grassImg = loadImage("grass.png");
    restartbuttonImg = loadImage("restart.png");
    appleImg = loadImage("apple.png");
    rottenappleImg = loadImage("rottenapple.png");
    bananaImg = loadImage("banana.png");
    rottenbananaImg = loadImage("rottenbanana.png");
    strawberryImg = loadImage("strawberry.png");
    rottenstrawberryImg = loadImage("rottenstrawberry.png");
   

function setup() {
  createCanvas(windowWidth,windowHeight);

  jungle = createSprite(755,400,20,10);
  jungle.addImage("jungle",jungleImg);
  jungle.scale=5;
  
 Health = 0;

 grassgroup= new Group();
 rottenapplegroup=new Group();
 applegroup =new Group();
 rottenbananagroup =new Group();
 rottenstrawberrygroup =new Group();
 bananagroup= new Group();
 strawberrygroup=new Group();
 trapgroup= new Group();

 okcow = createSprite(700,500);
 okcow.addImage("okcow",okcowImg);
 okcow.scale=0.5;

 flyingcow=createSprite(150,150);
 flyingcow.addImage("flyingcow",flyingcowImg);
 flyingcow.scale=0.5;
 flyingcow.addImage("lasercow",lasercowImg);
 flyingcow.scale=0.5;

 angrycow=createSprite(100,600);
 angrycow.addImage("angrycow",angrycowImg);
 angrycow.scale=0.4;

 restartbutton = createSprite(700,400);
 restartbutton.addImage("restart",restartbuttonImg);
 restartbutton.scale=0.5;
}

function draw() {
background("green");


if(gameState===PLAY){

  angrycow.visible=false;
  okcow.visible=true;
  restartbutton.visible=false;

jungle.velocityX=-5;

if (jungle.x < 0){
  jungle.x = jungle.width/2;
}
if(keyDown("space")){
  flyingcow.changeImage("lasercow",lasercowImg)
}
if(keyDown("up")){
  flyingcow.changeImage("flyingcow",flyingcowImg);
}
flyingcow.y = World.mouseY;

spawngrass();
spawnrottenapple();
spawnapple();
spawnrottenbanana();
spawnrottenstrawberry();
spawnbanana();
spawnstrawberry();
spawntrap();

if (grassgroup.isTouching(flyingcow)) {
  grassgroup.destroyEach();
  Health=Health+5;
}

if(rottenapplegroup.isTouching(flyingcow)){
  rottenapplegroup.destroyEach();
  Health=Health-1;
}

if(rottenbananagroup.isTouching(flyingcow)){
  rottenbananagroup.destroyEach();
  Health=Health-1;
}

if(rottenstrawberrygroup.isTouching(flyingcow)){
  rottenstrawberrygroup.destroyEach();
  Health=Health-1;
}

if(bananagroup.isTouching(flyingcow)){
  bananagroup.destroyEach();
  Health=Health+1;
}

if(strawberrygroup.isTouching(flyingcow)){
  strawberrygroup.destroyEach();
  Health=Health+1;
}

if(applegroup.isTouching(flyingcow)){
  applegroup.destroyEach();
  Health=Health+1;
}

if(trapgroup.isTouching(flyingcow)){
  trapgroup.destroyEach();
  gameState=END;
}
}

else if(gameState===END){
  
  rottenapplegroup.destroyEach();
  rottenbananagroup.destroyEach();
  rottenstrawberrygroup.destroyEach();
  applegroup.destroyEach();
  bananagroup.destroyEach();
  strawberrygroup.destroyEach();
  grassgroup.destroyEach();

  rottenapplegroup.velocityX=0;
  rottenbananagroup.velocityX=0;
  rottenstrawberrygroup.velocityX=0;
  applegroup.velocityX=0;
  bananagroup.velocityX=0;
  strawberrygroup.velocityX=0;
  grassgroup.velocityX=0;
  trapgroup.velocityX=0;

  okcow.visible=true;
  flyingcow.visible=false;
  restartbutton.visible=true;

  if(mousePressedOver(restart)){
    gameState===PLAY;
  }
  
}



drawSprites();

fill("red")
textSize (30)
text("Health " +Health,100,50)
}
  
function spawngrass(){

  if(frameCount %500===0){
    grass =createSprite(1700,random(10,1000),40,40);
    grass.addImage("grass",grassImg);
    grass.velocityX=-7;
    grass.scale=0.2;
    grassgroup.add(grass);
  }

}

function spawnrottenapple(){

if(frameCount%150==0){
   rottenapple= createSprite(1700,random(10,1000),40,40);
   rottenapple.addImage("rottenapple",rottenappleImg);
   rottenapple.Y=Math.round(random(10,450));
   rottenapple.velocityX=-7;
   rottenapple.scale=0.4;
   rottenapplegroup.add(rottenapple);
  }
   }
  
   function spawnapple(){
    if(frameCount%180==0){
      apple = createSprite(1700,random(10,1000),40,40);
      apple.addImage("apple",appleImg); 
      apple.Y=Math.round(random(10,450));
      apple.velocityX=-7;
      apple.scale=0.2;
      applegroup.add(apple);
     }

   }

   function spawnrottenbanana(){
    if(frameCount%250==0){
      rottenbanana = createSprite(1700,random(10,1000),40,40);
      rottenbanana.addImage("rottenbanana",rottenbananaImg); 
      rottenbanana.Y=Math.round(random(10,450));
      rottenbanana.velocityX=-7;
      rottenbanana.scale=0.2;
      rottenbananagroup.add(rottenbanana);
     }
   }

   function spawnrottenstrawberry(){
    if(frameCount%210==0){
      rottenstrawberry = createSprite(1700,random(10,1000),40,40);
      rottenstrawberry.addImage("rottenstrawberry",rottenstrawberryImg); 
      rottenstrawberry.Y=Math.round(random(10,450));
      rottenstrawberry.velocityX=-7;
      rottenstrawberry.scale=0.2;
      rottenstrawberrygroup.add(rottenstrawberry);
     }
   }
  
   function spawnbanana(){

    if(frameCount%270==0){
      banana = createSprite(1700,random(10,1000),40,40);
      banana.addImage("banana",bananaImg); 
      banana.Y=Math.round(random(10,450));
      banana.velocityX=-7;
      banana.scale=0.2;
     bananagroup.add(banana);
     }
   }

   function spawnstrawberry(){

    if(frameCount%240==0){
      strawberry = createSprite(1700,random(10,1000),40,40);
      strawberry.addImage("strawberry",strawberryImg); 
      strawberry.Y=Math.round(random(10,450));
      strawberry.velocityX=-7;
      strawberry.scale=0.2;
      strawberrygroup.add(strawberry);
     }
   }
  
   function spawntrap(){

    if(frameCount%240==0){
      trap = createSprite(1700,random(10,1000),40,40);
      trap.addImage("trap",trapImg); 
      trap.Y=Math.round(random(10,450));
      trapvelocityX=-7;
      trap.scale=0.2;
      trapgroup.add(trap);
     }
    }}