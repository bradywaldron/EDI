function setup() {//runs once
createCanvas(720,720);//creates a Canvas 720px by 720px
background(0,255,0);
}

function draw() {//runs in a loop
fill(255,100,100);
strokeWeight(8);
translate(60,60);

for (var y=0; y<600; y=y+300){

for (var x=0; x<600; x=x+300){
  quad(x,y,
       x+300,y,
       x+300, y+ 300,
       x,y+300);
}
}
}
