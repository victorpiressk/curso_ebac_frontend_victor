programa {
  funcao inicio() {
    inteiro valor

    escreva("Digite o valor máximo de contagem: ")
    leia(valor)

    para(inteiro x = 1; x <= valor; x++) {
      escreva(x, " - ")
    }
  }
}
