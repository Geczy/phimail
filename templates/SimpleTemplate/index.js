import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Wrapper, Content } from './index.styles'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const SimpleTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Head>
        <link rel='stylesheet' type='text/css' href='/css/main.css' />
        <link rel='stylesheet' type='text/css' href='/css/nprogress.css' />
      </Head>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default SimpleTemplate
