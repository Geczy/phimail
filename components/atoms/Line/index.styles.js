import styled from 'styled-components'
import { palette } from 'styled-theme'

export const Line = styled.hr`
  width: ${p => p.size || '80px'};
  height: 4px;
  border-radius: 2px;
  background: ${p => palette(p.tone)};
  display: inline-block;
  border-style: none;
  margin: 15px auto 15px auto;
`
