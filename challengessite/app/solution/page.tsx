import React from 'react'
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import { useEffect } from 'react';

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

  

    const Solution = ({ lang }: { lang: string }) => {
        let codeSnippet = '';
        
        
        // Select the appropriate code snippet based on the language
        switch (lang) {
          case 'js':
            codeSnippet = jsCode;
            break;
          case 'ts':
            codeSnippet = tsCode;
            break;
          case 'python':
            codeSnippet = pythonCode;
            break;
        case 'csharp':
            codeSnippet = csharpCode;
            break;
        case 'php':
        codeSnippet = phpCode;
        break;
          // Add cases for other languages...
          default:
            codeSnippet = jsCode; // Fallback
        }

        useEffect(() => {
            hljs.highlightAll();
          }, [lang]);
      
        return (
          <div>
            <pre><code>{codeSnippet}</code></pre> 
          </div>
        );
      }

export default Solution