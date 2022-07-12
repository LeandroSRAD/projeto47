// criando as variaveis 
const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body =Matter.Body; 
const Constraint = Matter.Constraint;
var buraco,buraco2,buracoImg;
var crianca,criancaImg;
var campo,campoImg;
var moeda,moedaImg;
var pa,paImg;
var poçaDeAgua,poçaDeAguaImg;
var ronaldo,ronaldoImg;
var background,backgroundImg;
var ball,ballIpng;
var ground,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10;
var ground11,ground12,ground13,ground14,ground15,ground16,ground17,ground18,ground19,ground20;
var ground21,ground22,ground23,ground24,ground25,ground26,ground27,ground28,ground29,ground30,ground31;



//preload carrega as midías do jogo 
function preload(){
  buracoImg = loadImage("Buraco.gif");
  criancaImg = loadImage("Crianca.jpg");
  campoImg = loadImage("Campo.png");
  moedaImg = loadImage("Moeda.png");
  paImg = loadImage("pa.png");
  poçaDeAguaImg = loadImage("PoçaDeAgua.png");
  ronaldoImg = loadImage("ronaldo.png");
  ballImg = loadImage("Bola.png");
  
}
//setup faz a aconfiguração
function setup(){
 
  canvas = createCanvas(2000,1000);
  
  crianca = createSprite(960,160,100,100);
  crianca.addImage("crianca",criancaImg);
  crianca.scale = 0.9;
  crianca.visible = false;
  

  ronaldo = createSprite(1000,600,100,100);
  ronaldo.addImage("ronaldo",ronaldoImg);
  ronaldo.scale = 0.4;


  ball = createSprite(1200,715,100,100);
  ball.addImage("ball",ballImg);
  ball.scale = 0.4;
  //ball.visible = false;
  

  buraco = createSprite(300,270,10,10);
  buraco.addImage("buraco",buracoImg);
  buraco.scale = 0.6;
  buraco.depth = ronaldo.depth-1;
  //buraco.visible = false;

  buraco2 = createSprite(1600,850,10,10);
  buraco2.addImage("buraco",buracoImg);
  buraco2.scale = 0.6;
  buraco2.depth = ronaldo.depth-1;
  //buraco2.visible = false;


  ground = createSprite(160,555,10,800);
  ground2 = createSprite(310,680,300,10);
  ground3 = createSprite(960,950,1600,10);
  ground4 = createSprite(1760,555,10,800);
  ground5 = createSprite(960,160,1600,10);
  ground6 = createSprite(830,900,10,100);
  ground7 = createSprite(1100,900,10,100);
  ground8 = createSprite(1100,850,200,10);
  ground9 = createSprite(1000,805.50,10);
  ground10 = createSprite(1200,805,10,100);
  ground11 = createSprite(1200,750,200,10);
  ground12 = createSprite(1300,555,10,400);
  ground13 = createSprite(1300,350,200,10);
  ground14 = createSprite(1200,395,10,100);
  ground15 = createSprite(1100,630,10,250);
  ground16 = createSprite(1055,500,100,10);
  ground17 = createSprite(1000,390,10,230);
  ground18 = createSprite(930,280,150,10);
  ground19 = createSprite(1100,210,10,100);
  ground20 = createSprite(700,260,10,200);
  ground21 = createSprite(655,360,300,10);
  ground22 = createSprite(500,315,10,100);
  ground23 = createSprite(545,260,100,10);
  ground24 = createSprite(800,455,10,200);
  ground25 = createSprite(750,550,100,10);
  ground26 = createSprite(700,695,10,300);
  ground27 = createSprite(550,840,300,10);
  ground28 = createSprite(1610,670,300,10);
  ground29 = createSprite(1690,400,150,10);
  ground30 = createSprite(1610,470,10,150);
  ground31 = createSprite(1450,500,310,10);
  

 
 
}
//draw faz o movimento, a ação do jogo
function draw(){

  background("white")
  //background(campoImg);
  
  

  fill("red");
  textSize(20);
  text("X: "+mouseX+"/ Y: "+mouseY,mouseX,mouseY);
  

  if(keyIsDown(UP_ARROW)){
    ronaldo.y-=5;
  }

  if(keyIsDown(DOWN_ARROW)){
    ronaldo.y+=5;
  }

  if(keyIsDown(LEFT_ARROW)){
    ronaldo.x-=5;
  }

  if(keyIsDown(RIGHT_ARROW)){
    ronaldo.x+=5;
  }



 
   drawSprites();
  }
  
  function mousePressed(){
  
  }