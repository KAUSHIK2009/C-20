 var fixedRect,movingRect

function setup(){
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 80, 30);
 movingRect= createSprite(200,200,50,80);
fixedRect.shapeColor="black";
movingRect.shapeColor="black";
}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x<65
     && fixedRect.x-movingRect.x<64
     && movingRect.y-fixedRect.y<1
     && fixedRect.y-movingRect.y<1){
    fixedRect.shapeColor="blue";
        movingRect.shapeColor="blue";
    
  
  }
else{
fixedRect.shapeColor="black";
movingRect.shapeColor="black";
}
  drawSprites();
  
}