
let form=document.querySelector("form");

form.addEventListener("submit" , function(event)
{
    
    event.preventDefault();
   let user=document.querySelector("#user");
   let pass=document.querySelector("#pass");
   console.log(user.value);
   console.log(pass.value);// value property stores the actual input value

   console.log("========================================================");

 // it shows the enterd 
    console.dir(form);

    let user2=this.elements[0];
    let pass2=this.elements[1];

    console.log(user.value);
    console.log(pass.value);

    alert(`hi ${user.value} your password is ${pass.value}`);

});

console.log("========================================================");

// user event
let user1=document.querySelector("#user");

user1.addEventListener("change", function(){
    console.log("chnaged"+ user.value);
});

console.log("========================================================");

// input event
let pass=document.querySelector("#pass");

pass.addEventListener("input", function(){
    console.log("chnaged"+ pass.value);
});


console.log("========================================================");
//using input event trying to print the username elemnt into para

let user=document.querySelector("#user");
let p=document.querySelector("p");

user.addEventListener("change", function(){
console.log(user.value);
p.innerText=user.value;
});

console.log("========================================================");

