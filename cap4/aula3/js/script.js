
window.addEventListener('load', () =>{
    doSpread();
    doRest();
    doDestructuring();
});
function doSpread() {
    const marrieMen = people.results.filter(
        person => (person.name.title === 'Mr')
    );
    const marrieWomen = people.results.filter(
        person => (person.name.title === 'Ms')
    );

    // console.log(marrieMen);
    // console.log(marrieWomen);
    const marriePeople = [...marrieMen, ...marrieWomen, {msg: 'oi'}];
    console.log(marriePeople);
}

function doRest(){
    console.log(infiniteSum(1,2));
    console.log(infiniteSum(1,2, 100));
    console.log(infiniteSum(1,2, 1000));
}

function infiniteSum(...numbers) {
    //onsole.log(numbers);
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestructuring(){
    const first = people.results[0];
    //repetitivo
    // const username = first.login.username;
    //const password = first.login.password;
    
    //usando destrucruring
    const {username, password} = first.login;
    console.log(username);
    console.log(password);
}