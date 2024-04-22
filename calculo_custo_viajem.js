var resultado = document.getElementById("resultado");
function Exibir() {
    var tipoCombustivel = document.querySelector('input[name="option"]:checked').value;
    if (tipoCombustivel == "gasolina" || tipoCombustivel == 'etanol'){
        
        return CalculoCusto()
    }
    else{
        console.log("Erro")
    }
}
function CalculoCusto(){
    var tipoCombustivel = document.querySelector('input[name="option"]:checked').value;
    var preco = document.getElementById("preco").value
    var consumo = document.getElementById("consumo").value
    var distancia = document.getElementById("distancia").value

    const ConsumoViajem = (distancia / consumo)
    const CustoTotal= (ConsumoViajem * preco)
    resultado.innerHTML = `O custo de uma viajem de ${distancia}km, usando ${tipoCombustivel} é de ${CustoTotal} R$.`
}
