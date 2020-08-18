var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 40, 20);
  wall=createSprite(1200,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX = speed;
  wall.shapeColor = rgb(80,80,80);
  bullet.shapeColor = rgb(255,255,255);
}

function draw() {
  background("black");
  
  var damage = Math.round(0.5*weight*bullet.velocityX*bullet.velocityX/(thickness*thickness*thickness));
  console.log(damage);
  if (hasCollided(bullet,wall)){
    
    if(damage>10) {
      bullet.shapeColor = "red";
    }
    if(damage<10) {
      bullet.shapeColor =rgb(0,255,0);
  }
}
bullet.collide(wall);
  drawSprites();
}

function hasCollided(Lbullet,Lwall)
{
LbulletRightEdge = Lbullet.x + Lbullet.width;
LwallLeftEdge = Lwall.x;
if (LbulletRightEdge>=LwallLeftEdge) {
    return true;
}
else{
    return false;
}
}