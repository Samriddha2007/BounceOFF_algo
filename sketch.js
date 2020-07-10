var fix,moving;
var c,d;
var e,f;
function setup() {
  createCanvas(800,400);
  fix = createSprite(400, 200, 50, 50);
  fix.shapeColor = "blue";
  moving = createSprite(500,300,50,50);
  moving.shapeColor = "red";
  c = createSprite(10,10,40,40);
  c.velocityX = 5;
  c.velocityY = 5;
  d = createSprite(360,360,40,40);
  d.velocityX = -5;
  d.velocityY = -5;
  e = createSprite(100,100,50,50);
  e.velocityY = 4;
  f = createSprite(100,300,50,50);
  f.velocityY = -4;
}

function draw() 
{
  background(0);  
  drawSprites();
  moving.x = World.mouseX;
  moving.y = World.mouseY;

  if(istouching(moving,fix))
  {
    moving.shapeColor = "yellow";
    fix.shapeColor = "green";
  }
  else
 {
   moving.shapeColor = "red";
   fix.shapeColor = "blue";
 }
  bounceOff(c,d);
  bounceOff(e,f);
}
   


function istouching(object1,object2)
{
  if(object1.x - object2.x <= object1.width/2 + object2.width/2 && 
    object2.x - object1.x <= object2.width/2 + object1.width/2 &&
    object1.y - object2.y <= object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object2.height/2 + object1.height/2)
 {
   return true;
 }
 else
 {
   return false;
 }
}

function bounceOff(object1,object2)
{
  if(object1.x - object2.x <= object1.width/2 + object2.width/2 && 
    object2.x - object1.x <= object2.width/2 + object1.width/2 )
  {
    object1.velocityX = object1.velocityX * -1;
    object2.velocityX = object2.velocityX * -1;
  }
  if(object1.y - object2.y <= object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object2.height/2 + object1.height/2)
  {
    object1.velocityY = object1.velocityY * -1;
    object2.velocityY = object2.velocityY * -1;
  }
}