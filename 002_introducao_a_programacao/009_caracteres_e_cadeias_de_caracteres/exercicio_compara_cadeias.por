programa {
  funcao inicio() {
    cadeia palavra1 = "ab", palavra2 = "ba"

    enquanto (palavra1 != palavra2) {
      escreva("Vericador de palavras iguais!\nInforme a primeira palavra: ")
      leia(palavra1)
      escreva("Informe a segunda pralavra: ")
      leia(palavra2)
      escreva("As palavras são diferentes, tente novamente!\n")
    }

    se (palavra1 == palavra2) {
      escreva("Parabens! As palavras são identicas.")
    }
  }
}
