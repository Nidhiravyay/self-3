function form(){
Poster=createSprite(width/2-50,height/2,20,20);
   Poster.addImage(onoff);
   Poster.scale=0.5;
   Poster.visible=true;
   Button1=createButton('START GAME');
   Button1.position(width/2+450,height/2+100);
   Button1.style('width','200px');
   Button1.style('height','50px');
   Button1.style('font-size','20px');
   Button1.style('font-weight','bold');
   Button1.style('font-family','cursive');
   Button1.mousePressed(()=>{
    Button1.hide();
    Button2.hide();
    Poster.visible=false; 
    NinjaHattori=createSprite(width/2-500,height/2-100,20,20); 
    NinjaHattori.addAnimation("Ninja",ninja);
    NinjaHattori.scale=0.35;
    NinjaHattori.debug=true;
    NinjaHattori.setCollider("rectangle",50,0,100,350);
    console.log(NinjaHattori.y);
    gameState="play";
    Block1=new Blocks(350,600,500,500);
    Block2=new Blocks(1000,600,500,500);
    Star=createSprite(width/2+500,height/2,20,20);
    Star.addImage(star);
    Star.scale=0.1;
  });
   Button2=createButton('CONTROLS');
   Button2.position(width/2+450,height/2+200);
   Button2.style('width','200px');
   Button2.style('height','50px');
   Button2.style('font-size','20px');
   Button2.style('font-weight','bold');
   Button2.style('font-family','cursive');
   Button2.mousePressed(()=>{
    Button1.hide();
    Button2.hide();
    Poster.visible=false; 
    Buttons=createSprite(width/2-100,height/2+50);
    Buttons.addImage(arrrows);
    Buttons.scale=0.3;
    space=createSprite(width/2-100,height/2-200);
    space.addImage(spacebar);
    space.scale=0.9;
    Element2=createElement('h3','Press space to ON and OFF');
    Element2.position(width/2+20,height/2-250); 
    Element2.style('font-size','20px');
    Element2.style('font-family','cursive');
    Element3=createElement('h3','Press UP arrow to jump');
    Element3.position(width/2-200,height/2-90); 
    Element3.style('font-size','20px');
    Element3.style('font-family','cursive');
    Element4=createElement('h3','Press Right arrow to movie right');
    Element4.position(width/2-520,height/2+60); 
    Element4.style('font-size','20px');
    Element4.style('font-family','cursive');
    Element5=createElement('h3','Press Left arrow to movie left');
    Element5.position(width/2-10,height/2+60); 
    Element5.style('font-size','20px');
    Element5.style('font-family','cursive');
});
}