const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let world;
let engine;
var earthImg;
var earth;
var backgroundImage;
var button,balloon2;
var hydro,hydrogen;
var oxy;
var base1,base2;
var ground,ground2,ground3,ground4;
var obs1,obs2,obs3,obs4;
function preload(){
backgroundImage = loadImage('app bg.png')
 earthImg = loadImage('earth.png');
}


function setup() { 
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  hydro = new Atom(210,200,90,90);
  hydrogen = new Atom(1302,700,90,90);
oxy = new Oxygen(570,705,80,80);



  var base_options={
  isStatic:true
  }


  var gro_options={
    isStatic:true,
    friction:2
    }




  var obs_options={
    isStatic:true,
    rigidity:0.9,
    friction:0.6
    }

    ground = Bodies.rectangle(550,770,2100,10,gro_options);
    World.add(world,ground);

    ground2 = Bodies.rectangle(1580,770,10,2100,gro_options);
    World.add(world,ground2);
    ground3 = Bodies.rectangle(5,770,10,2100,gro_options);
    World.add(world,ground3);

    ground4 = Bodies.rectangle(550,2,2100,10,gro_options);
    World.add(world,ground4);

  base1 = Bodies.rectangle(200,230,250,10,base_options);
  World.add(world,base1);

  base11 = Bodies.rectangle(1100,400,250,10,base_options);
  World.add(world,base11);


  base2 = Bodies.rectangle(1300,730,250,10,base_options);
  World.add(world,base2);

  
  obs1 = Bodies.rectangle(340,360,110,10,obs_options);
  World.add(world,obs1);


  obs3 = Bodies.rectangle(580,710,210,10,obs_options);
  World.add(world,obs3);


  obs4 = Bodies.rectangle(880,750,310,15,obs_options);
  World.add(world,obs4);


  obs5 = Bodies.rectangle(600,250,210,10,obs_options);
  World.add(world,obs5);

  obs6 = Bodies.circle(920,210,20,obs_options);
  World.add(world,obs6);

  obs7 = Bodies.circle(120,340,20,obs_options);
  World.add(world,obs7);

  obs8 = Bodies.circle(1120,110,20,obs_options);
  World.add(world,obs8);

  obs9 = Bodies.circle(1220,710,20,obs_options);
  World.add(world,obs9);

  obs10 = Bodies.circle(1000,450,20,obs_options);
  World.add(world,obs10);

  earth = createImg('earth.png');
  earth.position(-10,550);
 earth.size(1600,1000);

 balloon = createImg('balloon.png');
 balloon.position(10,110);
 balloon.size(150,150);
 balloon.mouseClicked(blow);


 balloon2 = createImg('balloon.png');
 balloon2.position(10,610);
 balloon2.size(150,150);
 balloon2.mouseClicked(blows);



button = createButton("  BEGIN  ");
button.position(650,350);
button.size(300,100);
button.class("blowButton");
button.mouseClicked(begin);


fill("black");
rectMode(CENTER);
ellipseMode(RADIUS);
textSize(40)
imageMode(CENTER);
}


function draw() 
{
background("pink");
image(backgroundImage,800,400,1600,1800);
Engine.update(engine);
imageMode(CENTER);

hydro.show();
hydrogen.show();
oxy.show();

var pos = oxy.body.position;
    


rect(base1.position.x,base1.position.y,200,10);
rect(base2.position.x,base2.position.y,200,10);
rect(base11.position.x,base11.position.y,200,10);
rect(obs1.position.x,obs1.position.y,110,10);
rect(obs3.position.x,obs3.position.y,210,10);
rect(obs4.position.x,obs4.position.y,310,15);
rect(obs5.position.x,obs5.position.y,210,10);

rect(ground.position.x,ground.position.y,2100,10);
rect(ground2.position.x,ground2.position.y,10,2100);
rect(ground3.position.x,ground3.position.y,10,2100);
rect(ground4.position.x,ground4.position.y,2100,10);


ellipse(obs6.position.x,obs6.position.y,30);
ellipse(obs7.position.x,obs7.position.y,30);     
ellipse(obs8.position.x,obs8.position.y,40);
ellipse(obs9.position.x,obs9.position.y,30);
ellipse(obs10.position.x,obs10.position.y,30);

var pos = oxy.body.position;
    
if((hydro.x-oxy.x> hydro.radius + oxy.radius)||(hydro.y-oxy.y> hydro.radius + oxy.radius)){
hydro.visible = true;
}


  drawSprites();
  fill("white");
  text("THE SCIENCE OF US",500,100);
  text("hydrogen",115,270);
  text("hydrogen",1310,760);
  text("oxygen",530,750);
}
function begin(){
button.remove();
earth.remove();
}
function blow() {
  Matter.Body.applyForce(hydro.body, {x:0, y:0}, {x:0.07, y:0.0});
}

function blows() {
  Matter.Body.applyForce(hydro.body, {x:0, y:0}, {x:0.0, y:0.07});
}
function collide(body,body)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,body.position.x,body.position.y);
          if(d<=80)
            {
              World.remove(engine.world,hydro);
               hydro = null;
               return true; 
            }
            else{
              return false;
            }
         }
}