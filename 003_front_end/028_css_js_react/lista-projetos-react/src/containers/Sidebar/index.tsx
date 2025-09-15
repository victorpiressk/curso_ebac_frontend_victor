import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SidebarConainer } from './styles'

type Props = {
  trocaTema: () => void
}

const SideBar = (props: Props) => (
  <aside>
    <SidebarConainer>
      <Avatar />
      <Titulo fontSize={20}>Victor Pires</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        victorpirssk
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarConainer>
  </aside>
)

export default SideBar
