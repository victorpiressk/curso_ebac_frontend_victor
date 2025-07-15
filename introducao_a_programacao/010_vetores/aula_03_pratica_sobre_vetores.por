programa {
  funcao inicio() {
    cadeia nomes[] = {"João", "Maria", "José"}, titulo[] = {"NOMES", "HORAS TRABALHADAS", "NUM. FILHOS", "FUMANTE"}
    real horas[] = {12.5, 25.5, 40.5}
    inteiro filhos[] = {5, 2, 6}
    caracter fuma[] = {'S', 'N', 'S'}

    escreva("\n||", titulo[0],"\t\t||", titulo[1],"\t\t||", titulo[2],"\t\t||", titulo[3])
    
    para (inteiro i = 0; i < 3; i++) {
      escreva("\n||", nomes[i],"\t\t||", horas[i],"\t\t\t\t\t\t\t\t||", filhos[i],"\t\t\t\t\t\t\t||", fuma[i])
    }
  }
}
