const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var binPiece1,binPiece2,binPiece3;
var ground,ball;

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground (500,480,1000,5);

	binPiece1 = new Bin (750,475,110,10);
	binPiece2 = new Bin (700,430,10,100);
	binPiece3 = new Bin (800,430,10,100); 

	ball = new Ball (100,100,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  binPiece1.display();
  binPiece2.display();
   binPiece3.display();
   ground.display();
 ball.display();

  drawSprites();
 
}
function keyPressed(){

	if(keyCode === UP_ARROW){
    	Matter.Body.applyForce(ball.body, ball.body.position, {x:65, y:-85});
	}

}