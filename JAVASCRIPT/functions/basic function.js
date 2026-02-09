// genreate random number using function

function rolldice()
{
   let rand=Math.floor(Math.random() * 6)+1;
   console.log(rand);
}
rolldice();

console.log("======================================================================");


// print information

function info(name, age)
{
   console.log(`my name is ${name} and age is ${age}`);
}
info("kaushalya",21);

console.log("======================================================================");

// avrage of 3 number
function avg(a,b,c)
{
   let cal=(a+b+c)/3;
   console.log(cal);
}
avg(23,45,1);
