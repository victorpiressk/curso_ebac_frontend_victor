programa {
  inclua biblioteca Util --> u
  
  funcao inicio() {
    inteiro sorteio, parimpar, valor, soma
    sorteio = u.sorteia(1, 5)

    escreva("Este é um jogo de par ou ímpar contra o computador.\nSe você deseja ímpar, digite (1). Se deseja par, digite (2).\nDigite (1) ou (2): ")
    leia(parimpar)

    se (parimpar == 1) {
      escreva("Você escolheu ímpar. Boa sorte!\nDigite um valor entre 1 e 5: ")
      leia(valor)

      se (valor <= 5 e valor >= 1) {
        soma = sorteio + valor
        escreva("O valor sorteado foi: ", sorteio," \n")

        se (soma % 2 == 0) {
        escreva("O valor da soma deu par! Você perdeu!")
        }
        senao {
          escreva("O valor da soma deu impar! Você ganhou!")
        }
      }
      senao {
        escreva("O valor precisa ser entre 1 e 5.\nReinicie o programa e tente novamente.")
      }
    }
    senao se(parimpar == 2) {
      escreva("Você escolheu par. Boa sorte!\nDigite um valor entre 1 e 5: ")
      leia(valor)

      se (valor <= 5 e valor >= 1) {
        soma = sorteio + valor
        escreva("O valor sorteado foi: ", sorteio," \n")

        se (soma % 2 == 0) {
        escreva("O valor da soma deu par! Você ganhou!")
        }
        senao {
          escreva("O valor da soma deu impar! Você perdeu!")
        }
      }
      senao {
        escreva("O valor precisa ser entre 1 e 5.\nReinicie o programa e tente novamente.")
      }
    }
    senao {
      escreva("Valor invalido. Digite (1) para ímpar ou (2) para par.\nReinicie o programa e tente novamente.")
    }
  }
}
