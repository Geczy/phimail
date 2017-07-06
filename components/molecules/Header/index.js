import React from 'react'
import { Navbar, NavbarItem } from '@coderbox/navbar'
import { Logo } from 'components'

const Header = (props) => {
  return (
    <div {...props}>
      <Navbar brand={<Logo href='/app/' />} fixed>
        <NavbarItem text='My Profile' href='/app/' icon='timeline' />
        <NavbarItem text='Jobs' href='/jobs' icon='work' />
        <NavbarItem text='Company' href='/company' icon='business' />
        <NavbarItem text='Sign Out' icon='close' />
      </Navbar>
    </div>
  )
}

export default Header
