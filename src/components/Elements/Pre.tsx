import React from 'react'
import CopyButton from './CopyButton'

interface PreProps extends React.HTMLProps<HTMLPreElement> {
    'data-language'?: string;
    raw?: any; // Adjust the type of raw if needed
  }

const Pre:React.FC<PreProps> = ({ children, raw, ...props }) => {
    const lang = props["data-language"] ||"shell";
  return (
    <>
    <div className="data-rehype-pretty-code flex text-sm justify-between items-center text-light dark:text-dark bg-accent dark:bg-accentDark rounded-t-xl p-2">
            <span className=''>{lang}</span>
            <span className=''>
              <CopyButton text={raw}/>
              </span>
            </div>
    <pre {...props} className='p-4 !rounded-b-xl !rounded-t-none'>      
        {children}
      </pre>
    </>
  )
}

export default Pre