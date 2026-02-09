// map using array of objects
let arr2=[
    { name:"kaushalya", age:21 },
    { name:"john", age:23 },
    { name:"alice", age:25 }
];

let res1=arr2.map((gpa)=>{
   gpa.age=gpa.age/10;
   return gpa;
});
console.log(res1);
