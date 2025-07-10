programa {
  funcao inicio() {
    inteiro matriz1[2][2], matriz2[2][2], matrizSoma[2][2], valorMatriz1, valorMatriz2

    escreva("Preencha os valores da Matriz - 1: \n")
    para (inteiro x = 0; x < 2; x++) {
      para (inteiro y = 0; y < 2; y++){
        escreva("Digite um valor: ")
        leia(valorMatriz1)
        matriz1[x][y] = valorMatriz1
      }
    }

    escreva("\n")

    escreva("Preencha os valores da Matriz - 2: \n")
    para (inteiro x = 0; x < 2; x++) {
      para (inteiro y = 0; y < 2; y++){
        escreva("Digite um valor: ")
        leia(valorMatriz2)
        matriz2[x][y] = valorMatriz2
      }
    }

    escreva("\n")

    escreva("Matriz - 1\n")
    para (inteiro x = 0; x < 2; x++) {
      para (inteiro y = 0; y < 2; y++){
        escreva("[", matriz1[x][y],"]")
      }
      escreva("\n")
    }

    escreva("\n")

    escreva("Matriz - 2\n")
    para (inteiro x = 0; x < 2; x++) {
      para (inteiro y = 0; y < 2; y++){
        escreva("[", matriz2[x][y],"]")
      }
      escreva("\n")
    }

    escreva("\n")

    escreva("Matriz - Soma\n")

    para (inteiro x = 0; x < 2; x++) {
      para (inteiro y = 0; y < 2; y++){
        matrizSoma[x][y] = matriz1[x][y] + matriz2[x][y]
      }
    }
    
    para (inteiro x = 0; x < 2; x++) {
      para (inteiro y = 0; y < 2; y++){
        escreva("[", matrizSoma[x][y],"]")
      }
      escreva("\n")
    }

  }
}
