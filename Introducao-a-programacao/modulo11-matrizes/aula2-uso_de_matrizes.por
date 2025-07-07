programa {
  funcao inicio() {
    inteiro matriz[3][3]

    matriz[0][0] = 1
    matriz[0][1] = 2
    matriz[0][2] = 3
    matriz[1][0] = 4
    matriz[1][1] = 5
    matriz[1][2] = 6
    matriz[2][0] = 7
    matriz[2][1] = 8
    matriz[2][2] = 9

    escreva("\n")

    para (inteiro x = 0; x < 3; x++) {
      para (inteiro y = 0; y < 3; y++) {
        escreva("[", matriz[x][y], "]")
      }
      escreva("\n")
    }

  }
}
