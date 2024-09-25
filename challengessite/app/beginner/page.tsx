import React from 'react'
import NavBar from '../navbar/page'
import Image from 'next/image'

const Beginner = () => {
  return (
    <div className='back'>   
    <div></div> 
        <NavBar />
        <div className='central-main'>
            
            <Image className='article-image' src="/coding.jpg" alt="coding" width={700} height={400} />
            
        
        <h1 className='header-shadow'>Beginner Level Challenges</h1>
        <p className='article-p'>Whether you're just learning to code, or an experienced professional looking for a refresh,</p>
        <p className='article-p'>
            these simple but challenging exercises will enhance your abilities and allow you to problem solve. </p>
        <br></br>
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>

            </ul>
        </div>
        <h2 className='header-shadow'>Challenge #1</h2>
        </div>
        </div>
      
  )
}

export default Beginner