const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var leftSide
var rightSide
var Groundobj

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
var ball_options={
	istatic:false
	,restitution:0.3
	,friction:0
	,density:1.2
}
	//Create the Bodies Here.
	ball= Bodies.circle(200,100,2,ball_options)
	World.add(world,ball)

	Groundobj=new ground(width/2,670,width,20)
	leftSide=new ground(1100,600,20,120)
    rightSide=new ground(1500,700,30,130)
	ground.shapeColor='yellow';
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  Groundobj.show();
  leftSide.show();
  rightSide.show();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	}

	if (keyCode===LEFT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
	}
}

