import { Button } from '@components/ui/button'
import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import {motion, AnimatePresence} from 'framer-motion'

type propsType = {
    handleCopy: () => void;
    isCopied: boolean
}

const CopyButton = ({handleCopy, isCopied} : propsType) => {
  return (
    <Button disabled={isCopied} onClick={handleCopy} variant={"ghost"} className="absolute top-2 right-2 text-white">
    <AnimatePresence initial={false} mode='popLayout'>
      {!isCopied ? (
        <motion.span
          animate={{scale: [0,1]}}
          key="copy"
          exit={{scale: 0}}
          transition={{type: 'tween', duration: .2}}
          >
          <IoCopyOutline />
        </motion.span>
      ) : (
        <motion.span
          animate={{scale: [0,1]}}
          key="checked"
          exit={{scale: 0}}
          transition={{type: 'tween', duration: .2}}
        >
          <FaCheck className="text-green-400" />
        </motion.span>
      )}
    </AnimatePresence>
    </Button>
  )
}

export default CopyButton
