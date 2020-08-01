
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

	Engine.run(engine);
  
	roof=new Roof(400,250,200,20)

	bob1=new Bob(400,300)
	rope1=new Rope({x:400,y:250},bob1.body)

	bob2=new Bob(360,300)
	rope2=new Rope({x:360,y:250},bob2.body)

	bob3=new Bob(440,300)
	rope3=new Rope({x:440,y:250},bob3.body)
}


function draw() {
Engine.update(engine);

  rectMode(CENTER);

  background("lightblue");

  roof.display();
  bob1.display();

   rope1.display()
   bob2.display()
   rope2.display()     

   bob3.display()
   rope3.display()     
   
   
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob2.body, bob2.body.position, {x: -0.05, y:0});
	}
}

