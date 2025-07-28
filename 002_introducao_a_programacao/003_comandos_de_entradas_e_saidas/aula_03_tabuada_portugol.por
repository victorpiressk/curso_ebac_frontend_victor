programa {
  funcao inicio() {
    inteiro termo = 0, numeroTab = 0, contador = 1

    escreva("Olá, Jovem! Vamos calcular!\nEu sou bom em tabuada!\nDigite o número que deseja tabular:\n")
    leia(numeroTab)
    
    enquanto(contador <= 10) {
      termo = termo + numeroTab
      escreva(termo, " - ")
      contador = contador + 1
    }
  }
}
