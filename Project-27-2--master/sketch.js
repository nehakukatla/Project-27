
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var world, engine, roof1;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800,700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	roof1 = new Roof(400,150,520,50);

	ball1 = new Ball(200,500,90);
	ball2 = new Ball(300,500,90);
	ball3 = new Ball(400,500,90);
	ball4 = new Ball(500,500,90);
	ball5 = new Ball(600,500,90);
	

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 800,
			height: 700,
			wireframe: false
		}
	});
	
	rope1 = new Rope(ball1.body,roof1.body,-190,0);
	rope2 = new Rope(ball2.body,roof1.body,-95,0);
    rope3 = new Rope(ball3.body,roof1.body,0,0);
	rope4 = new Rope(ball4.body,roof1.body,95,0);
	rope5 = new Rope(ball5.body,roof1.body,195,0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
  roof1.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-150,y:-100});
	}
}

function drawLine(constraint){
	ballBodyPosition=constraint.bodyA.position;
	roofBodyPosition=constraint.bodyB.position;

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x;
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y;
	
	line(ballBodyPosition.x, ballBodyPosition.y, roofBodyX,roofBodyY);
}




