// return unique element (iteration)
let arr1=[1,4,5,6,7,89];

function print(el){
    console.log(el);
}

arr1.forEach(print);

arr1.forEach((el)=>{ 
    console.log(el);
});

arr1.forEach(function(a){
    console.log(a);
});
