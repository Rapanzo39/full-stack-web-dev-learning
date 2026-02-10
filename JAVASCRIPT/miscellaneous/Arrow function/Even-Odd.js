// write an arrow function that takes single number as an agrument and returns whether the no is even or odd.

let isEven=(num)=>{
if(num%2==0) // wants to check for odd (num % 2 == 1) or (!num %==0)
{
  console.log("Number is even  "+ num);
  return num;
}else{
console.log(" Number is odd "+num);
return num;
}
}
isEven(7); // Number is odd 7
