import { useRef, useState } from 'react';

export const useCopySnippet = () => {
  const snipRef = useRef<HTMLElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    const snippet = snipRef.current?.textContent;

    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return
    }

    if (snippet) {
      try {
        await navigator.clipboard.writeText(snippet)
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.warn('Copy failed', err)
      }
    }
  }
  return { handleCopy, snipRef, isCopied };
}




// type CopyFn = (text: string) => Promise<boolean>
// type returnType = {copy: CopyFn}

// export function useCopyToClipboard(): returnType {

//   const copy: CopyFn = async text => {
//     if (!navigator?.clipboard) {
//       console.warn('Clipboard not supported')
//       return false
//     }

//     try {
//       await navigator.clipboard.writeText(text)
//       return true
//     } catch (error) {
//       console.warn('Copy failed', error)
//       return false
//     }
//   }
//   return {copy}
// }