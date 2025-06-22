programa {
  funcao inicio() {
    real num1, num2
    inteiro tam

    escreva("Quantas vezes quer somar? ")
    leia(tam)

    para (inteiro i = 1; i <= tam; i++) {
      escreva("Digite o priemiro valor: ")
      leia(num1)
      escreva("Digite o segundo valor: ")
      leia(num2)

      somador(num1, num2)
    }
  }

  funcao somador(real a, real b) {
    real c = a + b
    escreva("A soma dos valores é ", c,".\n")
  }
}
