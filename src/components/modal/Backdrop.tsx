import React from 'react'
import { motion } from "framer-motion"

interface Props {
    children: React.ReactNode,
    handleClose: () => void,
}

const Backdrop = ({ children, handleClose }: Props) => {
  return (
    <motion.div 
        className='fixed top-0 left-0 h-lvh w-full bg-black/80 dark:bg-white/20 
          md:dark:bg-white/75 backdrop-blur-md flex items-center justify-center z-[51]'
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 0}}
        onClick={handleClose}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop