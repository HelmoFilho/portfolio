
import React from 'react';

import { DisclosureButton } from '@headlessui/react';
import { FaBarsStaggered } from "react-icons/fa6";


const Header: React.FC = () => {

  return (
    <header className={`flex items-center flex-row justify-between fixed min-h-[12svh] w-full z-40
          bg-slate-100/95 dark:bg-slate-950/90 shadow-gray-900
          lg:min-h-[20lvh] top-0
        `} id="header">
      <div className={`w-1/5 flex items-center justify-center px-8 lg:w-[10%]`}>
        <DisclosureButton>
          <FaBarsStaggered className={`fill-slate-800 dark:fill-white size-4 md:size-8 lg:size-4`} />
        </DisclosureButton>

      </div>
      <div className='w-full lg:w-4/5'>
        <a href="#" className={`flex max-w-fit relative left-[calc(38%-4.38rem)] md:left-[calc(38%-7.39rem)] lg:left-[calc(36%-4.93rem)`}>
          <img
            src={"./images/logos/logo-light.png"}
            alt="My image"
            className='block dark:hidden header-logo-image'
          />
          <img
            src={"./images/logos/logo-dark.png"}
            alt="My image"
            className='hidden dark:block header-logo-image'
          />
        </a>
      </div>
    </header>
  )
}

export default Header
