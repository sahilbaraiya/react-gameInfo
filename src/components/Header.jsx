import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-slate-800 h-min-screen w-full  flex justify-evenly sticky top-0 '>
        <Link to={'/'} className='hover:text-blue-400 p-3 '>Home</Link>
        <Link to={'/all-games'} className='hover:text-blue-400 p-3 '>All Games</Link>
        <Link to={'/about'} className='hover:text-blue-400 p-3 '>About</Link>
        
    </div>
  )
}

export default Header