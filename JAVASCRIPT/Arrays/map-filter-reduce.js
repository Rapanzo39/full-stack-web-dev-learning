
//Square and sum the array elements using the arrow function and then find the average of the array.

arr=[2,4,6,810];
let square=arr.map((num)=> num*num);
let sum=square.reduce((acc,curr)=> acc+curr,0);
let avg=sum/arr.length;
console.log("square and sum of avg is " + avg);

console.log("=============================================================================================================");

//find the equal elemnts of array using map 

let array1=[1,3,5,6,777,89];
let findequalelements=array1.map((ele)=> ele+5);
console.log(findequalelements);

console.log("=============================================================================================================");

//convert all strings in an array to uppercase using map and arrow function.

let arr2 = ["kaushalya", "javascript", "hello"];
let newarr= arr2.map((ele=> ele.toUpperCase()));
 console.log(newarr);

console.log("=============================================================================================================");

//merge two objects using spread operator.

 function mergeObjects(obj1,obj2){

 let merged= {...obj1, ...obj2};
    console.log(merged);
    return merged;

 }
   let obj1={ nam:"kaushalya",dob:21,per:95,};
   let obj2={name:"john", age:25, marks:90,};
 mergeObjects(obj1,obj2);

console.log("=============================================================================================================");


arr=[1,2,3];
function doubleAndReturnArgs(arr, ...args)
{
    return [...arr, ...args.map((num)=> num*2) ];   
}
console.log(doubleAndReturnArgs(arr,4,5));


console.log("=============================================================================================================");

// it double arr elements and return new array with additional elements
arr=[30,40,50];
let res=arr.map((num)=> num*3);
console.log([...res, 10,11]);


console.log("=============================================================================================================");
//short path of double And Return Args function using arrow function
let test=((arr, ...args)=> [...arr, ...args.map(num=> num*2)]);
console.log(test([1,2,3],4,5));

console.log("=============================================================================================================");



