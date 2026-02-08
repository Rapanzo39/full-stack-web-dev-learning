//print hello msg using prompt and alert method.

let first_name= prompt("name");
let last=prompt("last");
let msg="welcome " + first_name+last + "!";
alert(msg);


console.log("==========================================================================");


// it will give the random numbers.

let max=prompt("Enter a max number");

let guess=Math.floor(Math.random(max) * 6)+1;

console.log(guess);

guess=prompt("guess  number");

console.log("==========================================================================");


// enter name and age using prompt

let name1= prompt("enter name");
let age1 = prompt("enter age");
alert("name is "+ " " + `${name1}`+ " and age is " + `${age1}` + "!!");

console.log("==========================================================================");

//it will guess the fav movie 

const favmovie="avatar";
let guess= prompt("guess my faveorite movie");
while(guess!=favmovie)
{
     if(guess=="quite")
          {
               console.log("you quite");
               break;
          }  
     
     guess=prompt("guess again");
     
}

if(guess==favmovie)
{
     console.log("conrats");
 }

 
console.log("==========================================================================");
