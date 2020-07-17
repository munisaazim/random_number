var randomNumber=Math.random()*6;
randomNumber=Math.floor(randomNumber)+1;

var randomNum=Math.random()*6;
randomNum=Math.floor(randomNum)+1;

function setNumber(){
if(randomNumber===1){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if(randomNumber===2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if(randomNumber===3){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if(randomNumber===4){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if(randomNumber===5){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else if(randomNumber===6){
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}
}
function setNumberTwo(){

    if(randomNum===1){
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    }
    else if(randomNum===2){
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    }
    else if(randomNum===3){
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    }
    else if(randomNum===4){
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    }
    else if(randomNum===5){
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    }
    else if(randomNum===6){
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }
}
function setAll(){
setNumber();
setNumberTwo();

if(randomNumber>randomNum){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
} 
else if(randomNum>randomNumber){
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
else
    document.querySelector("h1").innerHTML=" Draw! "; 
}
setAll();
/*Another method*
var num1=Math.floor(Math.random()*6)+1;
var randomImage="image/dice"+num1+".png";
var image1=document.queryAll("img")[0];
image1.setAttribute.("src, randomImage");

var num2=Math.floor(Math.random()*6)+1;
var randomImage2="image/dice"+num2+".png";
var image2=document.queryAll("img")[1];
image2.setAttribute.("src", "randomImage2");

if(num1>num2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if(num2>num1){
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
} 
else
    document.querySelector("h1").innerHTML=" Draw! "; 
}
*/