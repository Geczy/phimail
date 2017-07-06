
import styled from 'styled-components'
import { palette } from 'styled-theme'

export const Logo = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: ${p => `${p.size}px`};
  height: ${p => `${p.size}px`};
`

export const LogoSvg = styled.svg`
  fill: ${p => p.color || palette(1)};
`
