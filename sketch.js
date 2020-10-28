
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone, ground, slingshot;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world, boy;
function preload()
{
	boy = loadImage("img/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone = new Stone(235,420,30);

tree = new Tree(1050,300)

ground = new Ground(width/2, 600,width,20);

slingshot = new SlingShot(stone.body,{x:235,y:420});

mango1 = new Mangoes(1100, 100, 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy, 200,340,200,300);
  stone.display();
  tree.display();
  ground.display();
  slingshot.display();
  mango1.display();
  
  drawSprites();
 
}



