var fixedrec,movingrec;
function setup() {
  createCanvas(800,400);
  fixedrec=createSprite(200,200,50,50);
fixedrec.shapeColor='blue';
movingrec=createSprite(400,200,50,50);
movingrec.shapeColor='blue';
}

function draw() {
  background(255,255,255);  
  movingrec.x=World.mouseX;
  movingrec.y=World.mouseY;
  if(movingrec.x-fixedrec.x<movingrec.width/2+fixedrec.width/2&&(fixedrec.x-movingrec.x<fixedrec.width/2+movingrec.width/2)
  &&movingrec.y-fixedrec.y<movingrec.width/2+fixedrec.width/2&&fixedrec.y-movingrec.y<fixedrec.width/2+movingrec.width/2){
    
    movingrec.shapeColor='green';

    fixedrec.shapeColor='green';
  }
else{
  movingrec.shapeColor='blue';
  fixedrec.shapeColor='blue';
}
  drawSprites();
}
