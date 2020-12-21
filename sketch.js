
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
    
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
    
	var options={
	  isStatic:true
	}
	

	ground=Matter.Bodies.rectangle(400,650,800,20,options);
	World.add(world,ground);
 
	
	paper=new Paper(100,550,30);
	leftdustbin=new DustBin(510,575,10,100);
	rightdustbin=new DustBin(690,575,10,100);
	bottomdustbin=new DustBin(600,625,200,10);
	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);
  console.log("HELLO");
  fill("white");
  rect(ground.x,ground.y,800,20);
  paper.display();
  leftdustbin.display();
  rightdustbin.display();
  bottomdustbin.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW)
		Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-40});
}




