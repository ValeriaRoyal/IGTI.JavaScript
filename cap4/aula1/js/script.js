// 'use strict'; //o java acusa mais erros

// console.log('hello word');

// //var x let

// //var tem escopo abrangente
// //let tem escopo reduzido

// function withVar() {
//     for (var i = 0; i < 10; i++) {
//         console.log('var' + i);
//     }
//     i = 20;
//     console.log(i);
// }
// function withLet() {
//     for (let i = 0; i < 10; i++) {
//         console.log('let' + i);
//     }
//     //i = 20;
//     //console.log(i);
// }
// withVar();
// withLet();

// //const = n podemos reatribuir

// //const c = 20;
// //c= 20;

// const d = [];
// //d = 1;
// console.log(d);
// d.push = (1);
// console.log(d);

// function sum(a,b) {
//     return a + b;
// }

// const sum2 = function(a,b){ //funcão anonima
//     return a+b;
// }

// //arrow function
// const sum3 = (a,b) =>{
//     return a+b;
// }

// //arrow function reduzida
// const sum4 = (a,b) => a+b;

// console.log(sum(2,2));
// console.log(sum2(2,2));
// console.log(sum3(2,2));
// console.log(sum4(2,2));

// //template literals

// const name = 'Valéria';
// const surName = 'Regina';
// const text1 = 'Meu nome ' + name + ' ' + surName;
// const text2 = `Meu nome é ${name} ${surName}`; //usando crase
// console.log(text1);
// console.log(text2);

// const sum5 = (a,b = 10) => a+ b; 
// console.log(sum5(2));//caso n tenha o segundo parametro por padrão é preenchido o valor 10
// console.log(sum5(2,8));


//console.log(people);
window.addEventListener('load', () =>{
    doMap();
    doFilter();
    doForEach();
    doReduce();
    doFind();
    doSome();
    doEvery();
    doSort();
});

function doMap(){ //MAP transforma, retorna um novo objeto
    const nameEmailArray = people.results.map(person => {
        return {
            name: person.name,
            email: person.email
        };
    });
    console.log(nameEmailArray);
    return nameEmailArray;
}

function doFilter() { //FILTER retira elementos de acordo com a proposição
    const olderThan18 = people.results.filter(person => {
        return person.dob.age >= 50;
    });
    console.log(olderThan18);
}

function doForEach() {
    const mappePeople = doMap();
    
    mappePeople.forEach(person => {
            person.nameSize = 
                person.name.title.length +
                person.name.first.length +
                person.name.last.length;    
        });
        console.log(mappePeople);
}

function doReduce() {
    const totalAges = people.results.reduce((accumulator, current) => {
        return accumulator + current.dob.age;
    }, 0);
    console.log(totalAges);

    // let sumAges = 0;

    // for (let i = 0; i < people.results.length; i++) {
    //     var current = people.results[i];
    //     sumAges+= current.dob.age;
    // }
    // console.log(sumAges);
}

function doFind(){ //FIND busca no vetor
    const found = people.results.find(person =>{
        return person.location.state === 'Minas Gerais';
    });
    console.log(found); //retorna o primeiro que for encontrado
}

function doSome() {
    const found = people.results.some(person => {
        return person.location.state === 'Amazonas';
    });
    console.log(found);
}

function doEvery(){
    const every = people.results.every(person => {
        return person.nat === 'BR';
    });
    console.log(every);
}

// function doSort(){
//     const mappeNames = people.results.map(person => {
//         return person.name.first;
//     })
//     .filter(person => {
//         return person.startsWith('A');
//     })
//     .sort();

//     console.log(mappeNames);
// }

// function doSort(){
//     const mappeNames = people.results.map(person => {
//         return person.name.first.length;
//     })
//     //.filter(person => {
//     //    return person.startsWith('A');
//     //})
//     .sort();

//     console.log(mappeNames);
// }

// function doSort(){
//     const mappeNames = people.results.map(person => {
//         return {
//             name: person.name.first
//         };
//     })
//     .filter(person => person.name.startsWith('A'))
//     .sort((a,b) => {
//        return a.name.localeCompare(b.name);
//     });

//     console.log(mappeNames);
// }

// function doSort(){
//     const mappeNames = people.results.map(person => {
//         return {
//             name: person.name.first
//         };
//     })
//     .filter(person => person.name.startsWith('A'))
//     .sort((a,b) => {
//        return a.name.length - b.name.length;
//     });

//     console.log(mappeNames);
// }
function doSort(){
    const mappeNames = people.results.map(person => {
        return {
            name: person.name.first
        };
    })
    .filter(person => person.name.startsWith('A'))
    .sort((a,b) => {
       return b.name.length - a.name.length;
    });

    console.log(mappeNames);
}

