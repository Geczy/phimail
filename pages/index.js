import { MainTemplate } from 'templates'
import { Header } from 'components'
import Link from 'next/link'

const Index = () => (
  <MainTemplate header={<Header />}>
    <p>Hello Next.js</p>
    <Link href='/about'>
      <a>About Page</a>
    </Link>
  </MainTemplate>
)

export default Index
