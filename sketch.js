
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var block1_options = {
		restitution:0.5,
		friction:0.02, 
		frictionAir:0
	}

	var block2_options = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}

    var block3_options = {
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}

	var plane_options ={
		isStatic: true

	}



    block1 = Bodies.circle(220,10,10,block1_options);
    World.add(world,block1);

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,100,10,block3_options);
	World.add(world,block3);

	plane = Bodies.rectangle(600,580,1200,2,plane_options);
	World.add(world,plane);
	


	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("green");  
  Engine.update(engine);

  ellipse(block1.position.x,block2.position.y,10);
  rect(block2.position.x,block2.position.y,10,10);
  rect(block3.position.x,block3.position.y,100,10);
  rect(plane.position.x,plane.position.y,1200,2);


  drawSprites();
 
}



