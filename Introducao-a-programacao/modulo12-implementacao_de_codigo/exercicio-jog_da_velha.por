programa {
  funcao inicio() {

    inteiro demonstracao[3][3] = {{1,2,3},{4,5,6},{7,8,9}}, valor1
    caracter jogo[3][3]

    jogo[0][1] = 'y'
    jogo[1][1] = 'r'
    jogo[2][1] = 'r'
    jogo[1][0] = 'z'
    jogo[1][2] = 'z'

    para(inteiro x = 0; x < 3; x++) {
      para(inteiro y = 0; y < 3; y++) {
        escreva("[ ",demonstracao[x][y]," ]")
      }
      escreva("\n")
    }

    escreva("\n")

    enquanto ((jogo[0][0] != 'z')ou(jogo[0][0] != jogo[0][1])e(jogo[0][1] != jogo[0][2])) {
      para(inteiro x = 0; x < 3; x++) {
        para(inteiro y = 0; y < 3; y++) {
          escreva("[ ",jogo[x][y]," ]")
        }
        escreva("\n")
      }

      escreva("Digite um valor: ")
      leia(valor1)

      se (valor1 == 1) {
        jogo[0][0] = 'X'
      }
      se (valor1 == 2) {
        jogo[0][1] = 'X'
      }
      se (valor1 == 3) {
        jogo[0][2] = 'X'
      }
      se (valor1 == 4) {
        jogo[1][0] = 'X'
      }
      se (valor1 == 5) {
        jogo[1][1] = 'X'
      }
      se (valor1 == 6) {
        jogo[1][2] = 'X'
      }
      se (valor1 == 7) {
        jogo[2][0] = 'X'
      }
      se (valor1 == 8) {
        jogo[2][1] = 'X'
      }
      se (valor1 == 9) {
        jogo[2][2] = 'X'
      }
      se((((jogo[0][0] == jogo[0][1])e(jogo[0][1] == jogo[0][2]))ou((jogo[1][0] == jogo[1][1])e(jogo[1][1] == jogo[1][2]))ou((jogo[2][0] == jogo[2][1])e(jogo[2][1] == jogo[2][2])))) {
        para(inteiro x = 0; x < 3; x++) {
          para(inteiro y = 0; y < 3; y++) {
            escreva("[ ",jogo[x][y]," ]")
          }
          escreva("\n")
        }
        pare
      }
      se((((jogo[0][0] == jogo[1][0])e(jogo[1][0] == jogo[2][0]))ou((jogo[0][1] == jogo[1][1])e(jogo[1][1] == jogo[2][1]))ou((jogo[0][2] == jogo[1][2])e(jogo[1][2] == jogo[2][2])))) {
        para(inteiro x = 0; x < 3; x++) {
          para(inteiro y = 0; y < 3; y++) {
            escreva("[ ",jogo[x][y]," ]")
          }
          escreva("\n")
        }
        pare
      } 
      se((((jogo[0][0] == jogo[1][1])e(jogo[1][1] == jogo[2][2]))ou((jogo[0][2] == jogo[1][1])e(jogo[1][1] == jogo[2][0])))) {
        para(inteiro x = 0; x < 3; x++) {
          para(inteiro y = 0; y < 3; y++) {
            escreva("[ ",jogo[x][y]," ]")
          }
          escreva("\n")
        }
        pare
      } 
      
    }

    

      escreva("\n")

      

    // se((jogo[0][0] == jogo[0][1])e(jogo[0][1] == jogo[0][2])) {
    //   para(inteiro x = 0; x < 3; x++) {
    //     para(inteiro y = 0; y < 3; y++) {
    //       escreva("[ ",jogo[x][y]," ]")
    //     }
    //     escreva("\n")
    //   }
    // } 
    // pare
    

  }    
}
