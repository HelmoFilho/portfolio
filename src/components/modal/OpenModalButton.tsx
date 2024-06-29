'use client'

import React from 'react'

type PropTypes = {
    children: React.ReactNode,
    openHandle: () => void
}

const OpenModalButton = ({ children, openHandle }: PropTypes) => {
    return (
        <button onClick={openHandle}>
            {children}
        </button>
    )
}

export default OpenModalButton
