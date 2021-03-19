
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbinObj, paperObject,groundObject;	
var engine,world;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	
}


function draw() {

  background("skyblue");
  Engine.update(engine);

}

function keyPressed(){
    if(keyCode === 32 ){
      
     
    }
}


