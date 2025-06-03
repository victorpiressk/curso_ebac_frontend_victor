programa {
  funcao inicio() {
    real cotacao = 0, quantidade = 0, resultado = 0
    cadeia tipoMoeada

    escreva("Bem vindo ao conversor Dolar/Real!\nDigite a cotação do dolar hoje: \n")
    leia(cotacao)

    escreva("Para converter real em dolar, digite 1. Ou...\nPara converter dolar em real, digite 2.\nEscolhar a opção: ")
    leia(tipoMoeada)

    se (tipoMoeada == 1) {
      escreva("Digite a quantidade que deseja converter: \n")
      leia(quantidade)
      resultado = quantidade / cotacao
      escreva("O valor R$", quantidade, " convertido em dolar é US$", resultado)
    }

    senao se(tipoMoeada == 2) {
      escreva("Digite a quantidade que deseja converter: \n")
      leia(quantidade)
      resultado = quantidade * cotacao
      escreva("O valor US$", quantidade, " convertido em real é R$", resultado)
    }
    senao {
      escreva("Digite dolar ou real para que a conversão seja feita corretamente.\nInicie o programa e tente novamente.")
    }
  }
}
