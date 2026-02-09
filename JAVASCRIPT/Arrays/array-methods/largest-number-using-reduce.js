let num1=[1,2,3,4,5,6,7,80,9];

let max=num1.reduce((max, curr)=>{
    if(curr>max){
        return curr;
    }else{
        return max;
    }
});
console.log("largest number is :",max);
