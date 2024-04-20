var preco = document.getElementById("combustivel")
var consumo = document.getElementById("consumo")
var distanciaViajem= document.getElementById("distancia")
var resultado = document.getElementById("resultado")

function Calculo(){
    const consumoCarro = (distanciaViajem.value / consumo.value)
    const custo = (consumoCarro * preco.value)
    
    const Preco = preco.value
    const Consumo = consumo.value
    const Distancia = distanciaViajem.value

    resultado.innerHTML = `Para uma viajem de ${Distancia}km, com um carro que consome ${Consumo} l/km, com o combustível custando ${Preco} o custo total da viajem foi de ${custo}R$.`

}