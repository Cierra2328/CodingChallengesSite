import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div>
    <nav className='nav'>
    <Link href='/'><Image src="/code.png" alt="computer" width={75} height={75} /></Link>
        <h2 className='title'>Coding Challenges</h2>
        <ul className='flex'>
            <li><Link className='anchor' href="/beginner">Beginner</Link></li>
            <li><Link className='anchor' href="#">Intermediate</Link></li>
            <li><Link className='anchor' href="#">Advanced</Link></li>
        </ul>        
        
        </nav>
        
        </div>
  )
}

export default NavBar