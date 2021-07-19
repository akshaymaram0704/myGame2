const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var cupImg, ballImg, tableImg;
var cup, cup2, cup3, cup4, ball, restingBody, cups, cups2, cups3, cups4;

let engine;
let world;

function createCupRow(y, color) {
  for(c=0; c<4; c++)
  {
    var cup = createSprite(150+64*c,y,50, 25);
    cup.shapeColor = color;
    cup.addImage(cupImg)
    cup.scale = 0.3
    cups.add(cup);
    
  }
}

function createCupRow2(y,color) {
  for(c=0; c<3; c++){
    var cup2 = createSprite(180+64*c,y,50, 25)
    cup2.shapeColor = color;
    cup2.addImage(cupImg)
    cup2.scale = 0.3
    cups2.add(cup2);
    
    

  
  
  }
}

function createCupRow3(y,color) {
  for(c=0; c<2; c++){
    var cup3 = createSprite(210+64*c,y,50, 25)
    cup3.shapeColor = color;
    cup3.addImage(cupImg)
    cup3.scale = 0.3
    cups3.add(cup3);
    
    

  
  
  }
}

function createCupRow4(y,color){
  for(c=0; c<1; c++){
    var cup4 = createSprite(240+64*c,y,50, 25)
    cup4.shapeColor = color;
    cup4.addImage(cupImg)
    cup4.scale = 0.3
    cups4.add(cup4);
  }
}





function preload(){
  cupImg = loadImage("cup.png")
  ballImg = loadImage("ball.png")
  tableImg = loadImage("table.png")
  
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ball = Bodies.circle(240,414,40)
  ball.isStatic = true
  World.add(world, ball)
  restingBody = Bodies.rectangle(211,460,70,10)
  World.add(world,restingBody);
  restingBody.isStatic = true
  cups = new Group()
  cups2 = new Group()
  cups3 = new Group()
  cups4 = new Group()
  

  
}

function draw() 
{
  background("white");
  background(tableImg);
  text(mouseX+","+ mouseY,mouseX, mouseY)
  Engine.update(engine);
  imageMode(CENTER);
  image(ballImg,ball.position.x, ball.position.y, 80,80);
  createCupRow(105, "green");
  createCupRow2(160,"red")
  createCupRow3(215,"pink")
  createCupRow4(270, "brown")
  
  //if (cups.isTouching(ball)){
   // cupHit(ball, cups)
   //console.log("ball is touching the cup")
  //}

  
  
  

  
  drawSprites();


}
function keyPressed(){


  if(keyCode===UP_ARROW){
    console.log("yeet")
    Matter.Body.applyForce(ball, ball.position, {x:0, y:-1})
  }
}

//function cupHit(ball, cups) {
  //cups.remove();
  

  //}

