async function start(){
    // console.time('normal');
    // const five = await getFive();
    // const five = await getSeven();
    
    console.time('concurrent');
    const results = await Promise.all([promiseFive,promiseSeven])
    const promiseSeven = getSeven();
    const five = await.getFive();
    
    
    // const seven = await.getSeven();
    // const promiseFive = getFive();

    // console.log(five + seven);

    //getSeven = getSeven();
}

function getFive(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('getSeven resolvida')
            resolve(5);
        }, 5000);
    });
    return 5;
}

function getSeven(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('getSeven resolvida')
            resolve(7);
        }, 7000);
    });
    
    return 7;
}