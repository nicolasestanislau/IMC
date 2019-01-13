function imc(){
    var altura = document.getElementById("altura").value
    altura = parseFloat(altura.replace(',', '.'));
    
    var peso = document.getElementById("peso").value;
    peso = parseFloat(peso.replace(',', '.'));
    var indice = peso / Math.pow(altura, 2);
    indice = indice.toFixed(1);
        resultado(indice);
}

function resultado(indice){
    var indiceStr = (''+indice).replace('.', ',')
    if(indice > 40){
        document.getElementById("ans").value = "seu IMC é: " + indiceStr + " Obesidade Grau III";
    }else if(indice > 35){
        document.getElementById("ans").value = "seu IMC é: " + indiceStr + " Obesidade Grau II";
    }else if(indice > 30){
        document.getElementById("ans").value = "seu IMC é: " + indiceStr + " Obesidade Grau I";
    }else if(indice > 25){
        document.getElementById("ans").value = "seu IMC é: " + indiceStr + " Acima do peso";
    }else if(indice > 18.5){
        document.getElementById("ans").value = "seu IMC é: " + indiceStr + " Peso normal";
    }else if(indice > 17){
        document.getElementById("ans").value = "seu IMC é: " + indiceStr + " Abaixo do peso";
    }else {
        document.getElementById("ans").value = "seu IMC é: " + indiceStr + " Muito abaixo do peso";
    }
}