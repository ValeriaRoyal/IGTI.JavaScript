function getGroupMembers() {
    const members =[
        'Valéria',
        'João',
        'Daniel',
        'Julio',
    ];
    return members.sort();
}

function getFullName(...names){
    return names.join(' ');
}

function transform(input){
    return input.map(item => item /10 + 1);
}

function onlyNumberFrom(value) {
    return value.split('').filter((char) =>{
        return Number(char);
        //return !isNaN(char) && char != ' ';
    }).join('');
}

const title = 'Valéria';
const first = 'Regina';
const middle= 'Araujo';
const last = 'Nascimento';

function test12(title, first, middle, last){
    return `${title}  ${first}  ${middle}  ${last}`;
}

const input2 = [2,4,6,8,10,12,16,18,20];

function doFilter(input2) { //FILTER retira elementos de acordo com a proposição
    return input2.filter(n => {
        return n + 4;
    });
}

function test8(){
    let i = 0;
    setInterval(()=>{
        console.log(i++);
    },1000);
}
test8();

//console.log(doFilter());

// console.log(test12(title,first,middle,last));

// console.log(getGroupMembers());

// console.log(getFullName());

// console.log(transform([10, 20, 30, 40, 50]));
// console.log(transform([61, 72, 83, 94]));

// console.log(onlyNumberFrom('234khjcdk92837382hndkjsfljdfmnxkmvn.x,nw8eyq872984'));