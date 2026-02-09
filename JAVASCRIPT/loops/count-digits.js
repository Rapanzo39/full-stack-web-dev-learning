// find length of digit

let no=287152;
let lenth=0;
let copy1=no;
while(copy1 > 0)
{   
    copy1=Math.floor(copy1/10);
    lenth++;
}
console.log(lenth);
