
//function to find numbers greater than given number in array using arrow function.
// output [ 5, 6, 78 ]


let str1=[2,5,6,78,3];
no=3;
let result=[];
let large=(str1,no)=>{
    for(let i=0; i<str1.length;i++)
    {
        if(str1[i]>no)
        {
            result.push(str1[i]); 
           
           // console.log(str1[i])
        }
    }
     console.log(result);

}
large(str1,no);


