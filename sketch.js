
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var ground1;
var bob1;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(250, 250 , 20,200);
	bob1 = new bob(160,350,50/2);
	bob2 = new bob(185,350,50/2);
	bob3 = new bob(210,350,50/2);
	bob4 = new bob(235,350,50/2);
	bob5 = new bob(260,350,50/2);
	bob6 = new bob(285,350,50/2);
	bob7 = new bob(310,350,50/2);
	bob8 = new bob(335,350,50/2);
	
	rope1 = new rope(bob1.body,{x:160,y:250});
	rope2 = new rope(bob2.body,{x:185,y:250});
	rope3 = new rope(bob3.body,{x:210,y:250});
	rope4 = new rope(bob4.body,{x:235,y:250});
	rope5 = new rope(bob5.body,{x:260,y:250});
	rope6 = new rope(bob6.body,{x:285,y:250});
	rope7 = new rope(bob7.body,{x:310,y:250});
	rope8 = new rope(bob8.body,{x:335,y:250});
	
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
 
  background(0);

  text("PRESS SPACE TO MOVE THE CRADLE",130,200)
  drawSprites();
  ground1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  bob8.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();
  rope8.display();

}

function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:30});
	}
  }
  