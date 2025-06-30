programa {
  inclua biblioteca Texto --> txt
  funcao inicio() {
    caracter letra1
    cadeia texto1, palavra1
    inteiro posicaoPalavra, tamanhoTexto

    escreva("Buscador de palavras:\nInsira o texto desejado:\n")
    leia(texto1)

    escreva("Informe qual palavra deseja procurar dentro do texto: ")
    leia(palavra1)

    posicaoPalavra = txt.posicao_texto(palavra1, texto1, 0)

    se (posicaoPalavra >= 0) {
      escreva("A palavra ", palavra1," está na posição: ", posicaoPalavra)
    }
    senao {
      escreva("Não foi possivel encontrar a palavra pesquisada.")
    }
  }
}
