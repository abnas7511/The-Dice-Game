var randomNumber1 = Math.floor(Math.random()*6)+1; //random number generated for player 1

var randomimg = "dice"+randomNumber1+".png"; //dice1.png
var randomsource = "./images/"+randomimg;// ./images/dice1.png

//img selected and changed the source for img on left
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomsource);

var randomNumber2 = Math.floor(Math.random()*6)+1;//random number generated for player 2

var randomimg2 = "dice"+randomNumber2+".png"; //dice1.png
var randomsource2 = "./images/"+randomimg2; //./images/dice1.png

//img selected and changed the source for img on right
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomsource2);

//changing h1 acc to biggest num

var heading= document.querySelector("h1");
if(randomNumber1>randomNumber2)
{
    heading.innerHTML = "🚩Player 1 Wins";
}
else if(randomNumber1===randomNumber2)
{
     heading.innerHTML = "Draw!";
}else
{
    heading.innerHTML = "🚩Player 2 Wins";
}

