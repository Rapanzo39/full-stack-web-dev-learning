// find the length

let len=4;
function callback()
{
    console.log(this.length);

}
const object1={
    length:5,
    method:function(callback)
    {
        callback();
    },
};
object1.method(callback,1,2);


//output is 4 because the value of this.length in callback function refers to the length variable defined outside the object1.
//if we want output as 5 we can use bind method to bind the this value to object1

  object1.method(callback.bind(object1),1,2);
