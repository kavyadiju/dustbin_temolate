
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbinObj, paperObject,groundObject;	
var engine,world;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	dustbinObj=new dustbin(1150,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
  launcherObj=new Launcher(paperObject.body,{x:200, y:450})
}


function draw() {

  background("skyblue");
  Engine.update(engine);
 
  paperObject.display();
  groundObject.display();
  launcherObj.display();
  dustbinObj.display();
}
function mouseDragged() {
	

	Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});
  
}

function mouseReleased(){
    launcherObj.fly();
}
function keyPressed(){
    if(keyCode === 32 ){
      
       Matter.Body.setPosition(paperObject.body,{x:200, y:50});
       launcherObj.attach(paperObject.body);
    }
}


