programa {
  funcao inicio() {
    cadeia titulo[] = {"Nome", "Nota 1", "Nota 2", "Média"}
    cadeia nome[2]
    real notas[2][3]

    escreva("Tabela de notas:\n\nNome do primeiro aluno: ")
    leia(nome[0])
    escreva("Informe a Nota 1: ")
    leia(notas[0][0])
    escreva("Informe a Nota 2: ")
    leia(notas[0][1])

    notas[0][2] = (notas[0][0] + notas[0][1]) / 2

    escreva("\n")

    escreva("Nome do segundo aluno: ")
    leia(nome[1])
    escreva("Informe a Nota 1: ")
    leia(notas[1][0])
    escreva("Informe a Nota 2: ")
    leia(notas[1][1])

    notas[1][2] = (notas[1][0] + notas[1][1]) / 2

    escreva("\n")

    escreva("||", titulo[0], "\t\t\t\t", "||", titulo[1], "\t\t", "||",titulo[2], "\t\t", "||",titulo[3])

    para (inteiro x = 0; x < 2; x++) {
          escreva("\n||", nome[x], "\t\t\t")
          para (inteiro y = 0; y < 3; y++) {
            escreva("||", notas[x][y], "\t\t\t\t\t")
          }
        }
    
    escreva("\n\n")

    
  }
}
