programa {
  funcao inicio() {
    inteiro valor, cont = 0

    escreva("Vericador de números primos.\nDigite um valor: ")
    leia(valor)

    para(inteiro x = 1; x <= valor; x++) {
      se(valor % x == 0) {
        cont++
      }
    }
    
    se(cont == 2) {
      escreva("É primo!")
    }
    senao {
      escreva("Não é primo!")
    }
  }
}
