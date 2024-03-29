"use client";
import {useState} from 'react'
import { FaCopy } from 'react-icons/fa6';

const CopyButton = ({ text }:{text:string}) => {
    const [isCopied, setIsCopied] = useState(false);
    const copy = async () => {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
    
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      };
  return (
    <button disabled={isCopied} title='Copy to clipboard' onClick={copy} className='flex items-center hover:text-light/60 dark:hover:text-dark/80'>
      <FaCopy className='mr-1'/>{isCopied ? " Copied!" : " Copy"}
    </button>
  )
}

export default CopyButton
