programa {
  funcao inicio() {
    real nota1, nota2, media

    escreva("Vamos calcular a média das notas.\n")

    escreva("Digite a primeira nota: ")
    leia(nota1)
    escreva("Digite a segunda nota: ")
    leia(nota2)

    media = (nota1 + nota2) / 2

    se(media >= 8) {
      escreva("A média das notas é: ", media,".\nAprovado!")
    }
    senao se(media < 8 e media >= 3) {
      escreva("A média das notas é: ", media,".\nRecuperação!")
    }
    senao {
      escreva("A média das notas é: ", media,".\nReprovado!")
    }
  }
}
