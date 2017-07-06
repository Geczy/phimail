import React from 'react'

// styles
import { Line } from './index.styles'

const LineComponent = ({ size, ...props }) => {
  return <Line size={size} {...props} />
}

LineComponent.defaultProps = {
  palette: 'primary',
  tone: 1
}

export default LineComponent
