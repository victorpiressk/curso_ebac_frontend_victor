programa {
  funcao inicio() {
    inteiro valores[9]
    caracter jogo[3][3] = {{'1','2','3'},{'4','5','6'},{'7','8','9'}}
    
    para (inteiro i = 0; i < 9; i++) {
      escreva("Jogador X - Digite um valor: ")
      leia(valores[i])

      se (valores[i] == 1) {
        jogo[0][0] = 'X'
      }
      se (valores[i] == 2) {
        jogo[0][1] = 'X'
      }
      se (valores[i] == 3) {
        jogo[0][2] = 'X'
      }
      se (valores[i] == 4) {
        jogo[1][0] = 'X'
      }
      se (valores[i] == 5) {
        jogo[1][1] = 'X'
      }
      se (valores[i] == 6) {
        jogo[1][2] = 'X'
      }
      se (valores[i] == 7) {
        jogo[2][0] = 'X'
      }
      se (valores[i] == 8) {
        jogo[2][1] = 'X'
      }
      se (valores[i] == 9) {
        jogo[2][2] = 'X'
      }

      escreva("\n")
      para(inteiro x = 0; x < 3; x++) {
        para(inteiro y = 0; y < 3; y++) {
          escreva("[ ",jogo[x][y]," ]")
        }
        escreva("\n")
      }
      escreva("\n")
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

      escreva("Jogador O - Digite um valor: ")
      leia(valores[i])

      se (valores[i] == 1) {
        jogo[0][0] = 'O'
      }
      se (valores[i] == 2) {
        jogo[0][1] = 'O'
      }
      se (valores[i] == 3) {
        jogo[0][2] = 'O'
      }
      se (valores[i] == 4) {
        jogo[1][0] = 'O'
      }
      se (valores[i] == 5) {
        jogo[1][1] = 'O'
      }
      se (valores[i] == 6) {
        jogo[1][2] = 'O'
      }
      se (valores[i] == 7) {
        jogo[2][0] = 'O'
      }
      se (valores[i] == 8) {
        jogo[2][1] = 'O'
      }
      se (valores[i] == 9) {
        jogo[2][2] = 'O'
      }

      escreva("\n")
      para(inteiro x = 0; x < 3; x++) {
        para(inteiro y = 0; y < 3; y++) {
          escreva("[ ",jogo[x][y]," ]")
        }
        escreva("\n")
      }
      escreva("\n")
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
      escreva("\n")
    }
  }
}
