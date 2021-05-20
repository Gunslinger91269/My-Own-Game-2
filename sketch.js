const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var level=0
var circleGroup = []
var boxGroup = [] 

function preload(){
    bgi=loadImage("Pics/background.jpg")
    boyS=loadAnimation("Pics/img1.png","Pics/img3.png","Pics/img2.png")
    boyF=loadAnimation("Pics/img4.png","Pics/img5.png","Pics/img6.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight)
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(windowWidth/2,760,windowWidth,300);
    background1=createSprite(windowWidth/2,windowHeight/2)
    background1.addImage(bgi)
    background1.velocityX=-1
    boy1=createSprite(70,500)
    boy1.addAnimation("Standing",boyS)
    boy1.scale = 0.07
    
    
}
function draw(){
    background(bgi)
    if(background1.x<=0){
        background1.x=windowWidth/2
    }
    
    drawSprites()
    
    if(frameCount%600){
        if(level===0)
        level=1;
        else
        level=0
      }
       if(frameCount%100==0){
       createBlock()
       }
    
}

function createBlock(){
    if(level===1){
        b1=new Box(windowWidth,385,100,random(20,100))
        boxGroup.push(b1);
        
      }
      if(level===0){
       
        c1=new Ball(windowWidth,10,random(30,100))
        circleGroup.push(c1);
        
      }
    }