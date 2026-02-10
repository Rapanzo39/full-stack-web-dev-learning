//merge two objects using spread operator.


 function mergeObjects(obj1,obj2){
 let merged= {...obj1, ...obj2};
    console.log(merged);
    return merged;

 }
   let obj1={ nam:"kaushalya",dob:21,per:95,};
   let obj2={name:"john", age:25, marks:90,};
   mergeObjects(obj1,obj2);
