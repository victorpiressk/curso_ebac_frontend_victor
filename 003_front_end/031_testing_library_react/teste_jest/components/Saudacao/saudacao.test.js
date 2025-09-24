const saudacao = require('./saudacao')

describe('Testes para saudacao', () => {
    test('Deverá retornar Olá, Maria', () => {
        const olaMaria = saudacao.dizOla('Maria')

        expect(olaMaria).toBe('Olá, Maria')
        expect(olaMaria).toContain(',')
        
    })

    test('Test de verdadeiro ou falso', () => {
        const verdade = true
        const falso = false

        expect(verdade).toBeTruthy()
        expect(falso).toBeFalsy()
    })

    test('Teste de array', () => {
        const arrayNumeros = [1,2,3,4,5]

        expect(arrayNumeros).toHaveLength(5)
    })
})