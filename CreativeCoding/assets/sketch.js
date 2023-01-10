let gif;

function preload (){
  gif = loadimage ('assets/GIF')
}


function setup() {//runs once
createCanvas(windowWidth,windowWidth);//creates a Canvas 720px by 720px
}

function draw() {//runs in a loop
fill(212,0,0);
strokeWeight(1);


var num = 30; //number of sides
var sidelen = windowWidth/num;


for (var y=0; y<windowWidth; y=y+sidelen){

for (var x=0; x<windowWidth; x=x+sidelen){
  quad(x,y,
       x+sidelen,y,
       x+sidelen, y+ sidelen,
       x,y+sidelen);
}
}
}
