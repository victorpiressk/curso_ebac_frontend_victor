programa {
  inclua biblioteca Util --> u
  funcao inicio() {
    caracter confirma
    cadeia nomeLista[5]
    inteiro quantidadeVetor, contador = 0
    
    quantidadeVetor = u.numero_elementos(nomeLista)

    escreva("Digite (S) para SIM e (N) para NÃO.\nDeseja dicionar nome a lista? (S) ou (N): ")
    leia(confirma)

    se (contador < quantidadeVetor) {
      enquanto ((confirma == 's')ou(confirma == 'S')) {
        escreva("\nDigite o nome: ")
        leia(nomeLista[contador])
        contador++
        escreva("Deseja dicionar nome a lista? (S) ou (N): ")
        leia(confirma)
      }
      se ((confirma == 'n')ou(confirma == 'N')) {
        para (inteiro i = 0; i < quantidadeVetor; i++){
          escreva("\n", i,"- Nome: ", nomeLista[i])
        }
      }
    }
    senao {
      para (inteiro i = 0; i < quantidadeVetor; i++){
          escreva("\n", i,"- Nome: ", nomeLista[i])
        }
    }
      

    

    // para (inteiro i = 0; i < quantidadeVetor; i++) {
    //   enquanto ((confirma == 's')ou(confirma == 'S')) {
    //     escreva("\nDigite o nome: ")
    //     leia(nomeLista[i])
    //     escreva("Deseja dicionar nome a lista? (S) ou (N): ")
    //     leia(confirma)
    //   }
    //   se ((confirma == 'n')ou(confirma == 'N')) {
    //     escreva("\n", i,"- Nome: ", nomeLista[i])
    //   }
    // }
    
    
  }
}
