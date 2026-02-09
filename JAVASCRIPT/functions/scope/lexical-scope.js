// lexical scope

function outer(){
 let a = 10;
 function inner(){
  let x=55;
   console.log("outer variable " + a);
   console.log(x);
 }
 inner();
}
outer();
