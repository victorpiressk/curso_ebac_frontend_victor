programa {
  funcao inicio() {
    caracter letra1

    escreva("Digite (Y) para sim ou (N) para não: ")
    leia(letra1)

    se ((letra1 == 'y')ou(letra1 == 'Y')) {
      letra1 = 'Y'
    }
    senao se ((letra1 == 'n')ou(letra1 == 'N')) {
      letra1 = 'N'
    }
    senao {
      escreva("Você digitou um caractere invalido.\nReinicie o programa e tente novamente.")
    }

    escreva("Você digitou (",letra1,").")
  }
}
