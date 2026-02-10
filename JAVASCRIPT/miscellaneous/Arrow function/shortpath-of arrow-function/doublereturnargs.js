//shortpath of double And ReturnArgs function using arrow function.

let test=((arr, ...args)=> [...arr, ...args.map(num=> num*2)]);
console.log(test([1,2,3],4,5));  // [ 1, 2, 3, 8, 10 ]
