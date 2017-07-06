import styled from 'styled-components'
import { font, size } from 'styled-theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: white;
  font-family: ${font('primary')};
  font-size: ${size('font')};
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

export const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  margin-top: 74px;
`

export const Footer = styled.footer`
  margin-top: auto;
`
