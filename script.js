function CalcIMC(){
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var nome = document.getElementById("nome").value
    var resultado = document.getElementById("resultado")
    var condicao 

    const calculo = (peso / (altura * altura)).toFixed(2)
    
    if (calculo <= 18.5){
        condicao = "abaixo do peso"
    }
    else if(calculo > 18.5 && calculo <=25){
        condicao = "com o peso normal"
    }
    else if(calculo > 25 && calculo <=30){
        condicao = "acima do peso"
    }
    else if(calculo > 30 && calculo <=40){
        condicao = "obeso"
    }
    else if(calculo > 40){
        condicao = "com obesidade grave"
    }
    else{
        condicao = "Algo deu errado. Reveja os valores ou contate o suporte."
    }
    resultado.innerHTML = `${nome}, o resultado do seu imc foi de ${calculo} e você está ${condicao}.`
}