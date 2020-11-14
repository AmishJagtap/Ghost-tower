var ghost,ghostImage,door,climber;
var doorImage,climberImage,block,tower,towerImage;
var doorsGroup,climbersGroup,blocksGroup;
var PLAY=1
var END=0
var gameState = PLAY

function preload(){

ghostImage=loadImage("ghost-standing.png");
towerImage=loadImage("tower.png");
doorImage=loadImage("door.png")
climberImage=loadImage("climber.png")


}
function setup(){

createCanvas(600,600)

tower=createSprite(300,60,600,600);
tower.addImage(towerImage)

ghost=createSprite(300,300,20,20);
ghost.addImage(ghostImage)
ghost.scale=0.4

climbersGroup=new Group()
blocksGroup=new Group()
doorsGroup=new Group()

}

function draw(){

background(0);

if(gameState===PLAY){



tower.velocityY=3

if(tower.y>600){

tower.y=300

}

if(keyDown("space")){
ghost.velocityY=-10

}
ghost.velocityY=ghost.velocityY+1;
if(keyDown("left_arrow")){
ghost.x=ghost.x-3

}
if(keyDown("right_arrow")){
ghost.x=ghost.x+3

}
spawnDoors();

if(climbersGroup.isTouching(ghost)){
ghost.velocityY=0 
}
if(blocksGroup.isTouching(ghost)||ghost.y>600){

gameState=END;

}
drawSprites();
}
if(gameState===END){

textSize(30)
fill("yellow")
text("GAME OVER",230,250)
}
}

function spawnDoors(){

if(frameCount%240===0){
door=createSprite(100,10,20,20)
door.addImage(doorImage)
door.velocityY=3
door.x=Math.round(random(100,400));
door.depth=ghost.depth;
ghost.depth=ghost.depth+1

climber=createSprite(door.x,65,door.width,20)
climber.addImage(climberImage)
climber.velocityY=3

block=createSprite(door.x,75,climber.width,10)
block.velocityY=3
block.debug=true

climbersGroup.add(climber)
blocksGroup.add(block)
doorsGroup.add(door)
}

}
