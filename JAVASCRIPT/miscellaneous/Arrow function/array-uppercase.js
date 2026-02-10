//convert all strings in an array to uppercase using map and arrow function


let arr = ["kaushalya", "javascript", "hello"];

let newarr= arr.map((ele=> ele.toUpperCase())); // e.g.. ele= hello ele.toupercase= HELLO this will saved to newarr and loged.
 console.log(newarr); 



//map() is an array method that:
//Loops through every element
//Applies a function to each element
//Returns a new array
//Does NOT change the original array
