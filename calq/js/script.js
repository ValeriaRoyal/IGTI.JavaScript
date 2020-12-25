function calculation (a,b){
    //return a+b;
    const sum = a+b;
    const sub1 = a-b;
    const sub2 = a-b;
    const dev1 = b/a;
    const dev2 = b/a;
    const exp1 = a**b;
    const exp2 = b**a;

    return{
        soma: sum,
        sub1,
        sub2,
        dev1,
        dev2,
        exp1,
        exp2,
    };
}

console.log(calculation(3,5));