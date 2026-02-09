// find the sum of the digit


let number=287152;
let sum=0;
let copy = number;

while(copy > 0)
{
   let digit=copy % 10;
   sum+=digit;
   copy=Math.floor(copy / 10);
}
console.log(sum);
