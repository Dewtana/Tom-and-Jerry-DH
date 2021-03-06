var canvas,bg,tom,tomImg1,tomImg2,tomImg3,jerry,jerryImg1,jerryImg2,jerryImg3
function preload() {
    bg=loadImage("images/garden.png")
    tomImg1=loadAnimation("images/cat1.png")
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png")
    tomImg3=loadAnimation("images/cat4.png")
    jerryImg1=loadAnimation("images/mouse1.png")
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryImg3=loadAnimation("images/mouse4.png")
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    tom=createSprite(870,600)
    tom.addAnimation("tomSleeping",tomImg1)
    tom.scale=0.2

    jerry=createSprite(200,600)
    jerry.addAnimation("jerryStanding",jerryImg1)
    jerry.scale=0.15

    //create tom and jerry sprites here

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x-jerry.x < (tom.width-jerry.width)/2){
    tom.velocityX=0
    tom.addAnimation( "tomlastImg",tomImg3)
    tom.x=300
    tom.scale=0.2
    jerry.addAnimation("jerryLastImg",jerryImg3)
    jerry.scale=0.15
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode===LEFT_ARROW){
    jerry.addAnimation("jerryTeasing",jerryImg2)
    jerry.changeAnimation("jerryTeasing")
    jerry.frameDelay=25
    tom.velocityX=-5
    tom.addAnimation("tomRunning",tomImg2)
}
}
