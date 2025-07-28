programa {
  funcao inicio() {
    inteiro valor

    escreva("Contador de números pares.\nDigite o valor máximo de contagem: ")
    leia(valor)

    para(inteiro x = 0; x <= valor; x++) {
      se(x % 2 == 0) {
        escreva(x, " - ")
      }
    }
  }
}
