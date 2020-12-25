var inputHeight = null;
var inputWeight = null;

function calqIMC(event){
    event.preventDefault(); 
    
    inputHeight = Number(document.imcForm.inputHeight.value);
    inputWeight = Number(document.imcForm.inputWeight.value);

    console.log(inputHeight);// verificando se o valor está na variavel
    console.log(inputWeight);

    var square = (inputHeight ** 2); //altura ao quadrado
    console.log('quadrado: ' + square);
    
    var calculo = (inputWeight/square); //calculo de imc
    result(calculo);
}

function result(calculo){

    var r = null;

    if(calculo<18.5){    
        
        var resultImc = document.querySelector('#resultImc');
        r = resultImc.textContent = calculo.toFixed(2);
        resultImc.innerHTML = 'Você está magro com esse indice: ' + r
       
    }
    else if(calculo>=18.5 && calculo<24.9){
        var resultImc = document.querySelector('#resultImc');
        r = resultImc.textContent = calculo.toFixed(2);
        resultImc.innerHTML = 'Você está normal com esse indice: ' + r
    }
    
    else if(calculo>=25 && calculo<29.9) {
        var resultImc = document.querySelector('#resultImc');
        r = resultImc.textContent = calculo.toFixed(2);
        resultImc.innerHTML = 'Você está com sobre peso com esse indice: ' + r
    }
    else if(calculo>=30 && calculo<39.9) {
        var resultImc = document.querySelector('#resultImc');
        r = resultImc.textContent = calculo.toFixed(2);
        resultImc.innerHTML = 'Você está com obesidade com esse indice: ' + r
    }
    else if (calculo>40)
    {
        var resultImc = document.querySelector('#resultImc');
        r = resultImc.textContent = calculo.toFixed(2);
        resultImc.innerHTML = 'Você estácom obesidade grave com esse indice: ' + r
    }
}

