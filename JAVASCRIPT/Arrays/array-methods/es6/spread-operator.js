// spread operator in object
let data={
    name:"kaushalya",
    age:12,
};
let copy={...data , city:"solapur"};
console.log(copy);

// spread operator in array
let arr4=[1,2,3,4,5];
let arr5=[6,7,8,9];

let sum=((arr4,arr5)=>{
    return[...arr4,...arr5];
});
console.log(sum(arr4,arr5));
