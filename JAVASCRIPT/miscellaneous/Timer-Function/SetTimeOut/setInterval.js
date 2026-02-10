// every 2 sec it will print hiii 


setInterval(()=>{
    console.log("hiii");
},2000);

let id=setInterval(()=>{
    console.log("hello");
},2000);
clearInterval(id);
console.log(id);
