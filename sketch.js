var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
thickness=random(22,83)
  
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite (100,200,thickness,100);


  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX = speed;




}

function draw() {

  background("blue");  
  
  if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed /22500;
    if (deformation>180) {
      bullet.shapeColor = "white";
    }
    if (deformation<180 && deformation>100){
      bullet.shapeColor = "white"
    }
    if (deformation <100) {
      bullet.shapeColor = "white"
    }
  }

  if(hasCollided(bullet, wall))
  {
    
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if (damage>10)
  {
    wall.shapeColor="red";
  }
  if (damage <10)
  {
wall.shapeColor="green"
  }

  }
  drawSprites();
}

function hasCollided (lbullet,lwall) { 
  bulletRightEdge=lbullet.x +bullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
return false;
}