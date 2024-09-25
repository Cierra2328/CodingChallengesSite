import React from 'react'
import NavBar from './navbar/page'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <div>
    <div className='header'>
        <nav className='navBar'>
        <Link href='/'><Image src="/code.png" alt="computer" width={75} height={75} /></Link>
        <h2 className='title'>Coding Challenges</h2>
        <ul className='flex'>
            <li><Link className='anchor' href="/beginner">Beginner</Link></li>
            <li><Link className='anchor' href="#">Intermediate</Link></li>
            <li><Link className='anchor' href="#">Advanced</Link></li>
        </ul>        
        
        </nav>
        <Image className='home-img' src="/code.png" alt="computer" width={400} height={400} />
        </div>
        
        </div>
      <h1 className='header-shadow'>Learn Coding Challenges in Popular Languages</h1>
      <div className='lang-images'>
      <Link href='#'><Image className='lang-img' src="/javascript.png" alt="javascript" width={275} height={275} /></Link>
      <Image className='lang-img' id='ts' src="/typescript.png" alt="typescript" width={175} height={175} />
      <Image className='lang-img' id='python' src="/python.png" alt="python" width={300} height={200} />
      <Image className='lang-img' id='php' src="/php.png" alt="php" width={200} height={100} />
      <Image className='lang-img' id='csharp' src="/csharp.png" alt="csharp" width={200} height={200} />
      
      </div>
    
    </div>
  )
    
}

export default page