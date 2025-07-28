programa {
  funcao inicio() {
    inteiro num1, num2

    escreva("Verificador de multiplos:\nDigite o primeiro número:")
    leia(num1)
    escreva("Digite o segundo número:")
    leia(num2)

    se (num1 > num2) {
      se (num1 % num2 == 0) {
        escreva("O ", num1," é multiplo de ",num2,". ")
      }
      senao {
        escreva("O ", num1," não é multiplo de ",num2,". ")
      }
    }
    senao se (num2 > num1) {
      se (num2 % num1 == 0) {
        escreva("O ", num2," é multiplo de ",num1,". ")
      }
      senao {
        escreva("O ", num2," não é multiplo de ",num1,". ")
      }
    }
    senao {
      escreva("Os números digitados são iguais.\nPor favor, tentei novamente colocando números diferentes.")
    }

  }
}
