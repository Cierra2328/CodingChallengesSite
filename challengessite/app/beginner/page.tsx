
import React from 'react'
import NavBar from '../navbar/page'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
// import hljs from 'highlight.js';
// import 'highlight.js/styles/default.css';
import { Code } from 'bright';



const Beginner = () => {

    // const [selectedButton, setSelectedButton] = useState('JS');

//   const handleButtonClick = (language:string) => {
//     setSelectedButton(language);
//     // hljs.initHighlighting()
//   };

//   const getCode = () => {
//     switch (selectedButton) {
//       case 'JS':
//         return jsCode;
//       case 'TS':
//         return tsCode;
//       case 'Python':
//         return pythonCode;
//       case 'PHP':
//         return phpCode;
//       case 'C#':
//         return csharpCode;
//       default:
//         return jsCode;
//     }
//   };

//   const getLang = () => {
//     switch (selectedButton) {
//       case 'JS':
//         return 'javascript';
//       case 'TS':
//         return 'typescript';
//       case 'Python':
//         return 'python';
//       case 'PHP':
//         return 'php';
//       case 'C#':
//         return 'csharp';
//       default:
//         return 'javascript';
//     }
//   };

//   useEffect(() => {
//     hljs.highlightAll(); // This runs after the component mounts
//   }, []);

  const jsCode = `
  function reverseString(string) {
    const reversed = string.split('').reverse().join('');
    return reversed;
  }
  `;

  const tsCode =`function reverse(example:string) : string{
    return example.split('').reverse().join('');
}`;

    const pythonCode=`def reverseString(string):
        return string[::-1]
    `;

    const csharpCode=`public static void ReverseString(string sentence){
            char[] letters = sentence.ToCharArray();
            Array.Reverse(letters);
            string reversed = new string(letters);
        }`;

    const phpCode=`function reverseString($sentence): string{
        $reversedString = strrev($sentence);
        return $reversedString;
    }`;

  
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
        <div className='challenge-grid'>
            <Link href='#' className='Link'>Reverse a String</Link>
            <Link href='#' className='Link'>Check if String is a Palindrome</Link>
            <Link href='#' className='Link'>Calculate Fibonacci Sequence</Link>
            <Link href='#' className='Link'>Sort an Array of Numbers</Link> 
            <Link href='#' className='Link'>Find Max Value in an Array</Link>   
            <Link href='#' className='Link'>Find Min Value in an Array</Link>  
            <Link href='#' className='Link'>Check if Number is Prime</Link>   
            <Link href='#' className='Link'>Find the Factorial of a Number</Link> 
        </div>
        <h2 className='header-shadow-2' id='reverseString'>Reverse a String</h2>
        <p className='article-p'>Reversing a string is a simple but challenging exercise to evaluate your ability to work with strings.</p>
        <p>Simply take a string and reverse it. So 'element' would be 'tnemele'.</p>
        <br></br>
        <button className='button'>Show Solution</button>
        
        </div>
        <div className='solution-window'>
        {/* {['JS', 'TS', 'Python', 'PHP', 'C#'].map((language) => (
        <button
          key={language}
          className='solution-button'
          style={{
            backgroundColor: selectedButton === language ? '#1e1e1e' : '#f0f0f0',
            color: selectedButton === language ? '#fff' : '#000',
          }}
          onClick={() => handleButtonClick(language)}
        >
          {language}
        </button> */}
      {/* ))} */}
      <Code lang="js" lineNumbers>{jsCode}</Code>
        {/* <pre><code className={`language-${getLang()}`}>{getCode()}</code></pre> */}
        </div>
        
      

      <br />
     
    </div>
        
      
  )
}

export default Beginner