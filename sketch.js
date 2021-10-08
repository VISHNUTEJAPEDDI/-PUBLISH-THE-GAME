var squariad, Pin1, Pin2, Pin3, Pin4, Pin5, Pin6;
var edges;


function setup(){

  createCanvas(400,400);

  squariad = createSprite(200, 280, 20, 20);
  squariad.shapeColor ="white";
  Pin1 = createSprite(200, 300, 20, 20);
  Pin1.shapeColor ="BLACK";
  Pin2 = createSprite(180, 320, 20, 20);
  Pin2.shapeColor ="BLACK";
  Pin3 = createSprite(220, 320, 20, 20);
  Pin3.shapeColor ="BLACK";
  Pin4 = createSprite(160, 340, 20, 20);
  Pin4.shapeColor ="BLACK";
  Pin5 = createSprite(200, 340, 20, 20);
  Pin5.shapeColor ="BLACK";
  Pin6 = createSprite(240, 340, 20, 20);
  Pin6.shapeColor ="Black";


  edges = createEdgeSprites();

  squariad.velocityX=6;
  squariad.velocityY=-4;

}



function draw() {
background("GRAY");


Pin1.bounceOff(edges);
Pin2.bounceOff(edges);
Pin3.bounceOff(edges);
Pin4.bounceOff(edges);
Pin5.bounceOff(edges);
Pin6.bounceOff(edges);
squariad.bounceOff(edges);

Pin1.bounce(squariad);
Pin1.bounce(Pin2);
Pin1.bounce(Pin3);
Pin1.bounce(Pin4);
Pin1.bounce(Pin5);
Pin1.bounce(Pin6);

Pin2.bounce(squariad);
Pin2.bounce(Pin1);
Pin2.bounce(Pin3);
Pin2.bounce(Pin4);
Pin2.bounce(Pin5);
Pin2.bounce(Pin6);

Pin3.bounce(squariad);
Pin3.bounce(Pin1);
Pin3.bounce(Pin2);
Pin3.bounce(Pin4);
Pin3.bounce(Pin5);
Pin3.bounce(Pin6);

Pin4.bounce(squariad);
Pin4.bounce(Pin1);
Pin4.bounce(Pin2);
Pin4.bounce(Pin3);
Pin4.bounce(Pin5);
Pin4.bounce(Pin6);

Pin5.bounce(squariad);
Pin5.bounce(Pin1);
Pin5.bounce(Pin2);
Pin5.bounce(Pin3);
Pin5.bounce(Pin4);
Pin5.bounce(Pin6);

Pin6.bounce(squariad);
Pin6.bounce(Pin1);
Pin6.bounce(Pin2);
Pin6.bounce(Pin3);
Pin6.bounce(Pin4);
Pin6.bounce(Pin5);

drawSprites()
}