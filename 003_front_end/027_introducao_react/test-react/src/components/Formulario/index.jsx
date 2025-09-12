import { useState, useEffect } from "react"

const Formulario = () => {
    // let [valor, mudaValor]
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('')

    useEffect(() => {
        console.log("O componente iniciou")

        return () => {
            console.log("O componente finalizou")
        }
    }, [])

    useEffect(() => {
        console.log("O estado nome mudou")
    }, [nome])

    useEffect(() => {
        console.log("materia A mudou para: " + materiaA)
    }, [materiaA])

    useEffect(() => {
        console.log("materias B mudou para:" + materiaB + "e materia C mudou para: " + materiaC)
    }, [materiaB, materiaC])

    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value)
        setNome(estadoAnterior => {
            // estadoAnterior = valornovo
            return evento.target.value
        })
    }

    const renderizaResultados = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else if ((media < 7) & (media >= 3)) {
            return (
                <p>Olá {nome}, você está em recuperação</p>
            )
        } else {
            return (
                <p>Olá {nome}, você reprovou</p>
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(Number(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(Number(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(Number(evento.target.value))} />
            {renderizaResultados()}
        </form>
    )
}

export default Formulario