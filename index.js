// counter 

// let count=0;
// document.getElementById("decreasebtn").onclick=function()
// {
//     count-=1;
//     document.getElementById("mylabel").innerHTML=count;
// }

// document.getElementById("resetbtn").onclick=function()
// {
//     count=0;
//     document.getElementById("mylabel").innerHTML=count;
// }

// document.getElementById("increasebtn").onclick=function()
// {
//     count+=1;
//     document.getElementById("mylabel").innerHTML=count;
// }

// rolling three dices

// let x ;
// let y;
// let z;
// document.getElementById("rol").onclick=function(){
//     x=Math.floor(Math.random() *6 +1);
//     y=Math.floor(Math.random() *6 +1);
//     z=Math.floor(Math.random() *6 +1);
//     document.getElementById("first").innerHTML=x;
//     document.getElementById("second").innerHTML=y;
//     document.getElementById("third").innerHTML=z;
// }

// number guessing Game 

// const num= Math.floor(Math.random() * 10 +1);
// let guesses=0;

// document.getElementById("mybutton").onclick=function(){

// let guess =document.getElementById("mynum").value ;

// guesses+=1;

// if(guess==num)
// {
//     alert(`You guessed it right in ${guesses} guesses. the number is ${guess}`);
// }
// else if(guess < num)
// {
//     alert("Too small");
// }
// else
// {
//     alert("Too largee!!");
// }
// }

// celsius to fehrenite

document.getElementById("submitbutton").onclick = function()
{ 
    let temp ;
   if(document.getElementById("cbutton").checked)
   {
   
   temp= document.getElementById("textbox").value;
    temp=Number(temp);
     temp=tocelcius(temp);
     document.getElementById("templabel").innerHTML= temp + "° C";   }
     
   else if(document.getElementById("fbutton").checked)
   {

   temp= document.getElementById("textbox").value;
    temp=Number(temp);
    temp=tofehrenite(temp);
    document.getElementById("templabel").innerHTML= temp + "° F"; 
   }

   else
   {
    document.getElementById("templabel").innerHTML = "Select a unit";
   }
}
function tocelcius(temp){
    return (temp-32) * (5/9); 
}

function tofehrenite(temp)
{
    return (temp * 9/5) +32;
}

