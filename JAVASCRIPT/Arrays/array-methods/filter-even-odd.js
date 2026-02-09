let num=[1,2,3,4,5,6,7,8,9];

let even=num.filter((n)=>{
    if(n%2==0){
        console.log(`even numbers are : ${n}`);
        return n;
    }
    else{
        console.log(`odd numbers is: ${n}`);
    }
});
