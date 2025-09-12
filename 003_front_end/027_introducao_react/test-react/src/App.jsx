import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList"

function App() {
  const [formularioEstavisivel, setFormularioEstavisivel] = useState(false)
  const [nomeUsuario, setNomeUsuario] =useState('')

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Digite o usuário Github"/>
      {nomeUsuario && (
        <Perfil nomeUsuario={nomeUsuario} />
      )}
      <button onClick={() => setFormularioEstavisivel(!formularioEstavisivel)} type="button">Projetos</button>
      {formularioEstavisivel && (
        <ReposList nomeUsuario={nomeUsuario} />
      )}
      
      {/* <Formulario /> */}
      
    </>
  )
}

export default App
