let gif;

function preload (){
  gif = loadimage ('assets/GIF.gif')
}


function setup() {//runs once
createCanvas(windowWidth,windowWidth);//creates a Canvas 720px by 720px
}

function draw() {//runs in a loop
//fill(212,0,0);
strokeWeight(1);


var num = 30; //number of sides
var sidelen = windowWidth/num;


for (var y=0; y<2*windowWidth; y=y+sidelen){

for (var x=0; x<2*windowWidth; x=x+sidelen){
image(gif,x,y,windowWidth/num,windowWidth/num);

}
}
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
