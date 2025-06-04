programa {
  funcao inicio() {
    inteiro numMax, contador = 1

    escreva("Digite o valor máximo para contagem: ")
    leia(numMax)

    enquanto(contador <= numMax) {
      escreva(contador, " - ")
      contador++
    }
  }
}
