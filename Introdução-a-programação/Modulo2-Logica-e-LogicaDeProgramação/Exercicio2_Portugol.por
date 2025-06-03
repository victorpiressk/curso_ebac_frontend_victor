programa {
  funcao inicio() {
    inteiro tamanhoSequancia, contador = 1

    escreva("Olá! Vamos determinar uma sequancia de números inteiros!\nDigite o tamanho da sequencia: ")
    leia(tamanhoSequancia)
    escreva("Voce escolheu uma sequancia de números até: ", tamanhoSequancia, "\n")

    enquanto(contador <= tamanhoSequancia) {
      escreva(contador, "-")
      contador = contador + 1
    }
    
  }
}
