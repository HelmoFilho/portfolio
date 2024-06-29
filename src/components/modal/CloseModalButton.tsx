'use client'

import { IoIosCloseCircleOutline } from "react-icons/io";

type PropTypes = {
    closeHandle: () => void
}

const CloseModalButton = ({ closeHandle }: PropTypes) => {
    return (
        <button className='fixed top-3 right-3 md:top-44 lg:top-12 lg:right-16' onClick={closeHandle}>
            <IoIosCloseCircleOutline className='size-10 md:size-12 text-red-800 bg-white rounded-full' />
        </button>
    )
}

export default CloseModalButton
