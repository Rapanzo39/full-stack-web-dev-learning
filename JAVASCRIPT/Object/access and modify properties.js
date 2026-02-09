// accessing and modifying object properties
let stud={
    person:{
        Name:"kaushalya",
        age:21,
        city:"pune",
    }
};

stud.city="new york";
stud.country="united state";
console.log(stud);

console.log(Object.keys(stud.person));
console.log(Object.values(stud.person));
