import { motion } from 'framer-motion'
import React from 'react'
import Backdrop from './Backdrop'

interface Props {
	children: React.ReactNode
	handleClose: () => void
}

const Modal = ({ children, handleClose }: Props) => {
	const dropIn = {
		hidden: {
			y: "-100vh",
			opacity: 0,
		},
		visible: {
			y: "0",
			opacity: 1,
			transition: {
				duration: 0.1,
				type: "spring",
				damping: 35,
				stiffness: 500,
			}
		},
		exit: {
			y: "100vh",
			opacity: 0,
		},
	}

	return (
		<Backdrop handleClose={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className='flex items-center justify-center h-full w-full'
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				{children}
			</motion.div>
		</Backdrop>
	)
}

export default Modal
