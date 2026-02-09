let ar = [1, 2, 3, 4, 5];

ar.some(function(n) {
    if(n % 2 === 0){
        console.log("even:", n);
        return true;
    } else {
        console.log("odd:", n);
        return false;
    }
});
