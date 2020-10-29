var car;
var wall;
var speed;
var weight;


function setup() {


  createCanvas(800,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  
  wall=createSprite(650,200,30,height/2);
  wall.shapeColor="black";
}



function draw() {
  background("skyblue");  


  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  car.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if (deformation>180)
  {
    car.shapeColor="green";
  }
  if (deformation<180 && deformation>100)
  {
  car.shapeColor="yellow";
  }
  if(deformation<100)
  {
  
  car.shapeColor="red";
  
  }
  }

  
  drawSprites();

  textSize(25);
  fill("black");
  text("GCSO",300,50);

}