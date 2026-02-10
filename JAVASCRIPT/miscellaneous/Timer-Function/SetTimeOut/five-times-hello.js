
// print 5 times hello world every 2 seconds using setInterval.

function test(){
    let id= setInterval(()=>{
       console.log("hello world");
    },2000);

        setTimeout(()=>{

        clearInterval(id); //or simply write only this line dont need to write setTimeout function

    },10000);  // after 10 seconds it will stop the interval why because clearInterval is called after 10 seconds.why 10 sec because 5 times 2 sec =10 sec
}
 test();

 const square1=(a)=> a*a;
 console.log(square1(5));
