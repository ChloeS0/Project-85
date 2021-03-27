canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="pink.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="yellow.svg";
car2_x=10;
car2_y=100;
background_image="racing.jpg";

function add()
{
backgroundImg=new Image();
backgroundImg.onload=uploadBackground;
backgroundImg.src=background_image;

car1Img=new Image();
car1Img.onload=uploadcar1;
car1Img.src=car1_image;

car2Img=new Image();
car2Img.onload=uploadcar2;
car2Img.src=car2_image;
}

function uploadBackground()
{
ctx.drawImage(backgroundImg, 0,0,canvas.width, canvas.height);
}

function uploadcar1()
{
    ctx.drawImage(car1Img,car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2()
{
    ctx.drawImage(car2Img,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown", my_keydown);


function my_keydown(e)
{
    if(car1_x > 700)
{
    console.log("Car 1 won!!");
    document.getElementById("game_status").innerHTML="Car 1 won!!";
}
if(car2_x > 700)
{
    console.log("Car 2 won!!");
    document.getElementById("game_status").innerHTML="Car 2 won!!";
}
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38")
    {
        car1_up();
    }
    if(keyPressed=="40")
    {
        car1_down();
    }
    if(keyPressed=="37")
    {
        car1_left();
    }
    if(keyPressed=="39")
    {
        car1_right();
    }
    if(keyPressed=="87")
    {
        car2_up();
    }
    if(keyPressed=="83")
    {
        car2_down();
    }
    if(keyPressed=="65")
    {
        car2_left();
    }
    if(keyPressed=="68")
    {
        car2_right();
    }
}

function car1_down()
{
    if(car1_y<500)
    {
        car1_y=car1_y+10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        
    }
}
function car1_up()
{
    if(car1_y>0)
    {
        car1_y=car1_y-10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        
    }
}
function car1_right()
{
    if(car1_x<=700)
    {
        car1_x=car1_x+10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        
    }
}
function car1_left()
{
    if(car1_x>=0)
    {
        car1_x=car1_x-10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        
    }
}
function car2_down()
{
    if(car2_y<500)
    {
        car2_y=car2_y+10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}
function car2_up()
{
    if(car2_y>0)
    {
        car2_y=car2_y-10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}
function car2_right()
{
    if(car2_x<=700)
    {
        car2_x=car2_x+10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
        
    }
}
function car2_left()
{
    if(car2_x>=0)
    {
        car2_x=car2_x-10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

