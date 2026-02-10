//write an arrow function to calculate average of numbers in an array


let arr=[2,5,7,9,1,4];
arrayavg=(arr)=>{
    let avg=0;
    for(let i=0; i<arr.length;i++) // iterate through array till the end 
    {
      
        avg=avg+arr[i]/arr.length; // it will first add no with avg then divide with lenght and so on ...  
                                  // e.g 0 + 2 = 2/6 = 0.33333 now avg is 0.33333. (6) is the length of the array 
    }                              
    console.log(avg);
}
arrayavg(arr); //4.666666666666667

