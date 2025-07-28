programa {
  funcao inicio() {
    cadeia nome, sobreNome, espaco, nomeCompleto, registro[] = {"0","1","2","3","4"}

    registro[0] = "Victor Pires"
    registro[1] = "Gabriel Pires"
    registro[2] = "Neli Pires"
    registro[3] = "Osvaldo Pires"
    registro[4] = "Gustavo Pires"

    espaco = " "

    escreva("Nome: ")
    leia(nome)
    escreva("Sobrenome: ")
    leia(sobreNome)

    nomeCompleto = nome + espaco + sobreNome
    
    se ((nomeCompleto == registro[0])ou(nomeCompleto == registro[1])ou(nomeCompleto == registro[2])ou(nomeCompleto == registro[3])ou(nomeCompleto == registro[4])) {
      escreva("Acesso permitido.\nBem vindo, ", nomeCompleto,"! ")
    }
    senao {
      escreva("Acesso negado.\nTente novamente!")
    }
  }
}
