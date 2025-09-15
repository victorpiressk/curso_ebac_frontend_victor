import styled from 'styled-components'
import { Props } from '.'
import { Theme } from '../../themes/dark'

export const P = styled.p<Props>`
  color: ${(props) =>
    props.tipo === 'principal'
      ? (props.theme as Theme).corPrincipal
      : (props.theme as Theme).corSecundaria};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
`
