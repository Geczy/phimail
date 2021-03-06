import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Wrapper, Content } from './index.styles'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const SimpleTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default SimpleTemplate
