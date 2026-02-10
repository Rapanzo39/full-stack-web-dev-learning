// it triple the arr elements and return new array with additional elements.


arr=[30,40,50];

let res=arr.map((num)=> num*3); //[30*3] [40*3] [50*3] retrns res
console.log([...res, 10,11]);  //[ 90, 120, 150, 10, 11 ]
