 const Engine=Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;

var particles= [];
var plinkos= [];
var divisions= [];
var divisionHeight= 400;




function preload() {
  
}

function setup() {
  var canvas= createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;

    ground=new Ground(240,790,480,20);
    /*division=new Division(3,600,5,400);
    division1=new Division(80,600,10,400);
    division2=new Division(160,600,10,400);
    division3=new Division(240,600,10,400);
    division4=new Division(320,600,10,400);
    division5=new Division(400,600,10,400);
    division6=new Division(477,600,5,400);*/
    

    
   }

function draw() {
  background(0);
  Engine.update(engine);  
  drawSprites();
  ground.display();
 /* division.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();*/

  for (var k=0;k<=480 ; k=k+80){
  divisions.push(new Division(k,800-300/2,10,300));
}

for (var j=40;j<=480 ; j=j+50){
  plinkos.push(new Plinko(j,75));
}

for (var j=15;j<=480 ; j=j+50){
  plinkos.push(new Plinko(j,175));
}

for (var j=25;j<=480 ; j=j+50){
  plinkos.push(new Plinko(j,275));
}

for (var j=20;j<=480 ; j=j+50){
  plinkos.push(new Plinko(j,375));
}

if(frameCount%60===0){
  particles.push(new Particle(random(480/2-10,480/2+10),10,10));
}

  for (var k=0;k<divisions.length ; k++){
    divisions[k].display();
  }

  for (var j=0;j<plinkos.length ; j++){
    plinkos[j].display();
  }
  
for(var a=0;a<particles.length;a++){
  particles[a].display();
}
  
}

