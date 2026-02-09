let greet="hello";
function changegreet(){
  let greet="namsate";
  console.log(greet);

  function innergreet(){
     console.log(greet);
  }
  innergreet();
}
console.log(greet);
changegreet();
