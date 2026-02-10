
// this keyword using arrow function and normal function
// output is kaushalya , 21

let student={
    name:"kaushalya",
    age:21,
    eng:95,
    math:80,
    pro:this,
  
  // Normal Function inside Object
  
    person: function() { //global scope
        console.log(this.name);
        console.log(this.age);
    },

    personinfo:()=>{    // arrow function. Arrow functions do not have their own this.They take (this) from the surrounding scope (global).

        console.log(this.name);
    },

    getinfo:function(){ 
        setTimeout(()=>{   // set timeout with arrow function. Arrow function inherits this from getinfo.
            console.log(this);
        },2000);

    },

    getinfo1:function(){
        setTimeout(() => {
            console.log(this);
        },2000);
    }
};
student.person(); //this will call student inside person function which is global this.name will print and this.age output will be kaushalya and 21.




