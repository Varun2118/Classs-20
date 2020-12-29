
function setup() {
  createCanvas(800,400);
 fixedrec=createSprite(400, 200, 50, 50);
  movingrec=createSprite(200,400,50,67)
 
fixedrec.shapeColor="black"
movingrec.shapeColor="black"

}

function draw() {
  background("silver");  
  movingrec.x=mouseX
  movingrec.y=mouseY
  
  if(movingrec.x-fixedrec.x < movingrec.width/2 + fixedrec.width/2
    && fixedrec.x-movingrec.x <  movingrec.width/2 + fixedrec.width/2
    && movingrec.y-fixedrec.y < movingrec.height/2 + fixedrec.height/2
    && fixedrec.y - movingrec.y < movingrec.height/2 + fixedrec.height/2 ){
      fixedrec.shapeColor="gold"
    movingrec.shapeColor="gold"
    }
   else{
    fixedrec.shapeColor="black"
    movingrec.shapeColor="black"
   }
  
  
  
  
  drawSprites();
}