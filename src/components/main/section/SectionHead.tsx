import React from 'react'

interface Props {
    text: string
}

const SectionHead = ({text}: Props) => {
  return (
    <div className='flex items-center justify-center gap-x-4 md:gap-x-10 my-10'>
        <hr className='border-[1px] border-green-600 w-14 md:w-40 lg:w-60'/>
        <h2 className='text-5xl md:text-7xl font-semibold text-slate-900 dark:text-slate-400'>
            {text}
        </h2>
        <hr className='border-[1px] border-green-600 w-14 md:w-40 lg:w-60'/>
    </div>
  )
}

export default SectionHead
