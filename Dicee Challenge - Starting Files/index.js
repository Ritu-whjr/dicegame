var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceImage="dice" + randomnumber1 + ".png" ;
var randomImageSource="images/" + randomdiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceImage="dice" + randomnumber2 + ".png" ;
var randomImageSource="images/" + randomdiceImage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImageSource);



if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="player2 wins";
}
else if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="player1 wins";
}
else{
    document.querySelector("h1").innerHTML="draw match";
}
