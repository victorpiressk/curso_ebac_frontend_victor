import GlobalStyle, { Container } from './styles'
import SideBar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
