    function CalcularDesconto(preco, desconto) {
        let valorDesconto = (preco *Valoedesconto) / 100;
        let precoComDesconto = preco - Valordesconto;
        return precoComDesconto
    }
    
    let precoProduto = valorProduto = prompt("qual o preço do produto?");
    let descontoProduto = valorDesconto = prompt("Qual o desconto do produto?");
    
    let precoComDesconto = CalcularDesconto(precoProduto, descontoProduto)
            
    console.log(`O preço do produto selecionado é ${precoProtudo.toFixed(2)} com um desconto de ${descontoProduto} ficou o total de R$: ${precoComDesconto.toFixed(2)}`);