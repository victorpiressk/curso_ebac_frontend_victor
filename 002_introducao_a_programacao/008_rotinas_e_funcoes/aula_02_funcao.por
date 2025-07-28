programa {
  funcao inicio() {
    real num1, num2, soma
    inteiro tam

    escreva("Quantas vezes quer somar? ")
    leia(tam)

    para (inteiro i = 1; i <= tam; i++) {
      escreva("Digite o priemiro valor: ")
      leia(num1)
      escreva("Digite o segundo valor: ")
      leia(num2)

      soma = somador(num1, num2)
      escreva("A soma dos valores é ", soma,".\n")
    }
  }

  funcao real somador(real a, real b) {
    retorne a + b
  }
}
