programa {
  funcao inicio() {
    inteiro idade

    escreva("Verificador de Classificação indicativa.\nInforme a idade: ")
    leia(idade)

    se(idade >= 18) {
      escreva("Pode assistir filmes com Classificação 18+")
    }
    se(idade < 18 e idade >= 16) {
      escreva("Pode assistir filmes com Classificação até 16")
    }
    se(idade < 16 e idade >= 14) {
      escreva("Pode assistir filmes com Classificação até 14")
    }
    se(idade < 14 e idade >= 12) {
      escreva("Pode assistir filmes com Classificação até 12")
    }
    se(idade < 12 e idade >= 10) {
      escreva("Pode assistir filmes com Classificação até 10")
    }
    se(idade < 10) {
      escreva("Pode assistir filmes com Classificação Livre")
    }
  }
}
