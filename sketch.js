const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ball1,ball2,ball3,ball4;
var line1,line2,line3,line4;

//var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
    world = engine.world;

	 groundSprite=createSprite(320,200,250, 10);
	 groundSprite.shapeColor="white";
	

	engine = Engine.create();
	world = engine.world;
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
		World.add(world, ground);
	
	//Create the Bodies Here.
	ball1=new Ball(200,450,70);
	ball2=new Ball(270,450,70);
	ball3=new Ball(340,450,70);
	ball4=new Ball(410,450,70);

	line1=new Line(ball1.body,ground.body);
	line2=new Line(ball2.body,ground.body);
	line3=new Line(ball3.body,ground.body);
	line4=new Line(ball4.body,ground.body);
	Engine.run(engine);
  
}


function draw() {
  background(0);
	
  Engine.update(engine);
  rectMode(CENTER);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  line1.display();
  line4.display();
  line3.display();
  line2.display();
  drawSprites();
 
}



