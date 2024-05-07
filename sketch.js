var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

function setup(){
  createCanvas(800,800)
  engine = Engine.create()
  world = engine.world
  ground = new Ground(width/2,height,width,20)
}

function draw(){
  background("grey")
  Engine.update(engine)
  ground.display()
}
