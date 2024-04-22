function CalcMedia(){
    var nota1 = parseFloat(document.getElementById("nota1").value)
    var nota2 = parseFloat(document.getElementById("nota2").value)
    var nota3 = parseFloat(document.getElementById("nota3").value)
    var media = ((nota1 + nota2 + nota3) /3).toFixed(2)
    var resultado = document.getElementById("resultado")


    if(media < 5){
        resultado.innerHTML = `Sua média foi ${media} pontos, portanto você está reprovado.`
    }
    else if(media >= 5 && media <= 7){
        resultado.innerHTML = `Sua média foi ${media} pontos, portanto você está de recuperação. `
    }
    else if(media > 7){
        resultado.innerHTML = `Sua média foi ${media} pontos, portanto você foi aprovado. Parabéns.`
    }
    
}