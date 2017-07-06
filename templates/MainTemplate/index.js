import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

// css
import {
  Wrapper,
  Header,
  Content,
  Footer
} from './index.styles'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const PageTemplate = ({ header, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

export default PageTemplate
