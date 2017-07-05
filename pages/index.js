import { SimpleTemplate } from 'templates'
import Link from 'next/link'

const Index = () => (
  <SimpleTemplate>
    <p>Hello Next.js</p>
    <Link href='/about'>
      <a>About Page</a>
    </Link>
  </SimpleTemplate>
)

export default Index
