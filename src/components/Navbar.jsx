import {useState} from 'react';

import {close, logo, menu } from '../assets'

import {navLinks} from '../constants'

const Navbar = () => {
  return (
    <nav className='w-full py-6 flex justify-between items-center navbar'>
    <img src={logo} alt="" className='w-[120px] h-[32px]' />

    </nav>
  )
}

export default Navbar