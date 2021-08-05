var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg=loadImage("leaf.png");
}



function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);





}


function draw() {
  background(0);
  rabbit.x=mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  var select_sprites=Math.round(random(1,2));
console.log(select_sprites)
if (frameCount % 80==0) {
  if (select_sprites==1) {
    createApples()
    

  }
else if(select_sprites==2){
createLeaves()

}

}
}
function createApples(){
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.scale=0.04
  apple.velocityY=3
  apple.lifetime=150
}
function createLeaves(){
  leaves=createSprite(random(50,350),40,10,10)
  leaves.addImage(leavesImg)
  leaves.scale=0.04
  leaves.velocityY=3
  leaves.lifetime=150 
}