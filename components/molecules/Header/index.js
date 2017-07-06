import React from 'react'
import Link from 'next/link'
import { Navbar, NavbarItem } from '@coderbox/navbar'
import { Logo } from 'components'

const Header = (props) => {
  return (
    <div {...props}>
      <Navbar brand={<Logo href='/app/' />} fixed>
        <Link href='/about'>
          <NavbarItem text='My Profile' icon='timeline' />
        </Link>
        <Link href='/jobs'>
          <NavbarItem text='Jobs' href='/jobs' icon='work' />
        </Link>
        <NavbarItem text='Sign Out' icon='close' />
      </Navbar>
    </div>
  )
}

export default Header
