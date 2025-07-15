programa {
  inclua biblioteca Matematica --> m
  funcao inicio() {
    real ca, co, hipo, ca2, co2, hipo2

    separador()
    escreva("Vamos verificar se o triangulo é um triangulo retângulo:\n")
    separador()
    escreva("Digite o valor do Cateto Adjacente: ")
    leia(ca)
    escreva("Digite o valor do Cateto Oposto: ")
    leia(co)
    escreva("Digite o valor da Hipotenusa: ")
    leia(hipo)
    separador()

    ca2 = m.potencia(ca, 2)
    co2 = m.potencia(co, 2)
    hipo2 = m.potencia(hipo, 2)

    se (ca2 + co2 == hipo2) {
      escreva("Esse triangulo é um triangulo retângulo!\n")
      separador()
    }
    senao {
      escreva("Esse triangulo não é um triangulo retângulo!\n")
      separador()
    }
  }

  funcao vazio separador() {
    escreva("--------------------------------------------------------\n")
  }
}
