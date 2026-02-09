// larger then number

let arr=[3,4,6,9,10,2];

function largeno(arr,no){
    let largnum=[];
    for(let i=0; i<arr.length; i++)
    {
        if(no<arr[i])
        {  
            largnum.push(arr[i]);
        }      
    } 
    if(largnum.length===0){
        console.log("number is not greater then our number");
    } else {
        console.log("number larger than ", no ,":" ,largnum);
    }
}
largeno(arr,90);
