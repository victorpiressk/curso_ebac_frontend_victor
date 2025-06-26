programa {
  funcao inicio() {
    cadeia login, senha, registroLogin, registroSenha

    registroLogin = "victorpiressk@gmail.com"
    registroSenha = "123456"

    escreva("Acesse sua conta\nLogin: exemplo@email.com ")
    leia(login)
    escreva("Senha: ")
    leia(senha)

    se ((registroLogin == login)e(registroSenha == senha)) {
      escreva("Acesso permitido. Bem vindo!")
    }
    senao se ((registroLogin != login)e(registroSenha == senha)) {
      escreva("Login não registrado.\nReinicie e tente novamente!")
    }
    senao se ((registroLogin == login)e(registroSenha != senha)) {
      escreva("Senha incorreta.\nReinicie e tente novamente!")
    }
    senao {
      escreva("Login e Senha incorretos.\nReinicie e tente novamente!")
    }
  }
}
