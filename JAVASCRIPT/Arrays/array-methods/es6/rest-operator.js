// rest operator
let sum1=(...args)=>
{
    return args.reduce((add,el)=>{
        return add+el;
    });
}
console.log(sum1(1,2,3,4,5,6,7,8,9));
