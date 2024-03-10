
" use strict "  ; // treat all code as newer version 

//  based on data stored in the memory 

 // primitive 

 // 7 types : strings, number , boolean , null , undefined , symbol , big int 
 // in these datatypes a copy of the variable is given ie. change in coopied value doesnt change the value in original value 

 //  refrence : object , arrays , functions 

 const gameName = "harshita";

 //another method to declare the string 

 const getName = new String('ashreya');
 // here the values are stored in the form of key pairs  like 
 // 0 : h
 // 1 : a  ... and so on 

 // you can acess the keys 
 console.log(getName[0]);           // s

 const repoCount = 50;
 console.log( getName + repoCount + "Value");
 console.log(`the name is ${getName} with the value ${repoCount}`);
 console.log(getName.length);
 console.log(getName.ToUpperCase);
 console.log(getName.charAt(4));          //tis will give us the character at index 4
 console.log(getName.indexOf('a'));      // if there are one or more same characters then iit will give us the index of first character place

 console.log(getName.slice(-2,3));
 console.log(getName.substring(0,4));

 
 const score = 100 ; 
 const num = new Number (100);