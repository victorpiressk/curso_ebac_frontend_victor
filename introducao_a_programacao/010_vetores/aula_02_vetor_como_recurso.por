programa {
  inclua biblioteca Util --> ut
  funcao inicio() {
    inteiro vetor[] = {1, 2, 3, 4, 5, 6, 7, 8}, tamanhoVetor

    tamanhoVetor = ut.numero_elementos(vetor)

    escreva("O valor inserido no indice 5 é: ", vetor[5],".\n")
    escreva("O tamanho do vetor é: ", tamanhoVetor,". ")

    para (inteiro i = 0; i < 8; i++) {
      escreva("\n O valor é: ", vetor[i], "\n")
    }
  }
}
