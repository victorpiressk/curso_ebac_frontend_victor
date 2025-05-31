//Var

let estaChovendo: boolean = false
estaChovendo = true

let idade: number = 30

let altura: number = 1.78

const nacionalidade: string  =  'brasileira'

//tipagem implicita

let curso = 'front-end'

//arrays

const colegas: string[] = ['lucas', 'fernanda']
const tecnologias: Array<string> = ['html', 'css', 'js']
const notas: ReadonlyArray<number> = [7, 9, 5, 8] //apenas leitura. não é possivel adicinar novos itens com o push

const lista: [string, boolean, number] = ['victor', true, 30]
const lista2: [nome: string, estaEstudando: boolean, idade: number] = ['victor', true, 30]

//union

let idadeDaAna: number | string = 25
idadeDaAna = '25 anos'

//any

let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = 'victor'
dadosDaApi = [10, true, 'victor']
dadosDaApi = []
