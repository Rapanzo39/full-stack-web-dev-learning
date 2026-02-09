function multiple(fun , n){
  for(let i=0; i<=n; i++)
  {
     fun();
  }
}

let greet1=function(){
  console.log("hello");
}

multiple(greet1,2);

multiple(function() {
  console.log("namsate");
}, 20);
