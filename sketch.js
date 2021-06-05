
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var object1;
var object2;
var object3;
var object4;

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  object = Bodies.rectangle(200,20,50,100);
  World.add(world,object);
  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
  //object1
  object1 = Bodies.rectangle(300,20,50,100);
  World.add(world,object1);
  console.log(object1);
  console.log(object1.position.x);
  console.log(object1.position.y);

  object3 = Bodies.rectangle(250,5,50,100)
  World.add(world,object3);
  object2=Bodies.circle(400,20,100);
  World.add(world,object2);

}

function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
  //object1
  rectMode(CENTER);
  rect(object1.position.x,object.position.y,50,50);
  rect(object3.position.x,object.position.y,50,50);
  circle(object2.position.x,object2.position.y);
}
