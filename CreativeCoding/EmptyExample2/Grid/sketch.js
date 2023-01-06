function setup() {//runs once
createCanvas(720,720);//creates a Canvas 720px by 720px
background(0,0,255);
}

function draw() {//runs in a loop
fill(255,100,100);
strokeWeight(8);
translate(60,60);
quad(0,0,
     300,0,
     300,300,
     0,300);
quad(300,0,
    600,0,
    600,300,
    300,300);
quad(0,300,
    300,300,
    300,600,
    0,600);
quad(300,300,
    600,300,
    600,600,
    300,600);
}
