let per={
    name1:"kaushalya",
    age:21,
    city:"solapur", 
    country:"india",
};

let {name1, loc="maharasthra", ...args}=per;
console.log(name1,loc, args);
