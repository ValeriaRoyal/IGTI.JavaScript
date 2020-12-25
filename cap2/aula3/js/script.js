a = 6;
b = 7;

if(a>b){
    console.log(a + " é maior que " + b);
}else{

    if (a < b) {
        console.log(a + " é menor que " + b);
    }else{
        console.log(a + " é igual a " + b);
    }
}

var res = a > b ? "maior" : a < b ? "menor" : "igual";
console.log(res);

var nat = 1;
var somat = 0;

while (somat <= 10) {
    somat += nat;
    nat++;
}
console.log("A soma é " + somat);

var nat = 1;
var somat = 0;

do {
    somat += nat;
    nat++;
} while (somat <= 10);
console.log("A soma é " + somat);
