const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var getBackgroundImg;

var hour;
var bg = "sprites/sunrise1.png"

function preload() {
    // create getBackgroundImg( ) here2
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


}

function draw(){

    // add condition to check if any background image is there to add
    if(getBackgroundImg)
    background(getBackgroundImg);

    Engine.update(engine);


    // write code to display time in correct format here
    text("Time:" + hour, 50, 50 );


}

async function getBackgroundImage(){

    // write code to fetch time from API
    var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
    //change the data in JSON format
    var responseJSON = await response.json();
    var daytime = responseJSON.datetime
    // write code slice the datetime
     hour = daytime.slice(11,13);


    // add conditions to change the background images from sunrise to sunset
    if (hour > 06 && hour < 08){
        bg ="sunrise1.png";
    }else if (hour > 08 && hour < 10){
        bg ="sunrise2.png";
    }else if (hour > 10 && hour < 12){
        bg ="sunrise3.png";
    }else if (hour > 12 && hour < 14){
        bg ="sunrise4.png";
    }else if (hour > 14 && hour < 16){
        bg ="sunrise5.png";
    }else if (hour > 16 && hour < 18){
        bg ="sunrise6.png";
    }else if (hour > 18 && hour < 20){
        bg ="sunrise7.png";
    }else if (hour > 20 && hour < 22){
        bg ="sunrise8.png";
    }else if (hour > 22 && hour < 24){
        bg ="sunrise9.png";
    }else if (hour > 24 && hour < 02){
        bg ="sunrise10.png";
    }else if (hour > 02 && hour < 04){
        bg ="sunrise11.png";
    }else if (hour > 04 && hour < 06){
        bg ="sunrise12.png";
    }
    //load the image in backgroundImg variable here
    getBackgroundImg = loadImage(bg)
}
