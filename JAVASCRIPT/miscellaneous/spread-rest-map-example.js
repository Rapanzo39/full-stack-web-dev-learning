// this function will double the arr using ...args 
// [ 1, 2, 3, 8, 10 ]

arr=[1,2,3];
function doubleAndReturnArgs(arr, ...args)
{
    return [...arr, ...args.map((num)=> num*2) ]; // arr[1,2,3] calleback from function ...args[4,5] now using num* 2 the 4*2 and 5*2 becomes [8,10] and final o/p returns [1,2,3,8,10]
}
console.log(doubleAndReturnArgs(arr,4,5));
