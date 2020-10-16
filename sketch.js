var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3,box1S,box2S,box3S;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	box1S = createSprite(width/2,650,160,20);
	box1S.shapeColor = "red";

	box2S = createSprite(width/2-70,600,20,80);
	box2S.shapeColor = "red";

	box3S = createSprite(width/2+70,600,20,80);
	box3S.shapeColor = "red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5,isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	box1 = Bodies.rectangle(width/2,650,160,20,{isStatic:true});
	World.add(world, box1);

	box2 = Bodies.rectangle(width/2-70,600,20,80,{isStatic:true});
	World.add(world, box2);

	box3 = Bodies.rectangle(width/2+70,600,20,80,{isStatic:true});
	World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  fill("cyan");
  textSize(20);
  text("press DOWN ARROW to drop the supplies",170,50);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody,false); 
  }
}



