// 'use client'
import { CloseButton, DisclosurePanel, Transition } from '@headlessui/react';
import { useTranslations } from 'next-intl';

import { BsFillHouseFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { MdClass, MdKeyboardDoubleArrowLeft, MdWork } from "react-icons/md";
import { RiGitRepositoryFill } from "react-icons/ri";

import IconsSidebar from './sidebar/IconsSidebar';
import ThemeSwitch from './sidebar/ThemeSwitch';

const Sidebar = () => {

	const translation = useTranslations('Sidebar');
	return (
		<Transition
			enter="duration-500 ease-out"
			enterFrom="opacity-0 -translate-x-[100%]"
			enterTo="opacity-100 translate-x-0"

			leave="duration-300 ease-out"
			leaveFrom="opacity-100 translate-X-0"
			leaveTo="opacity-0 -translate-x-[100%]"
		>
			<DisclosurePanel className={`fixed overflow-auto lg:overflow-hidden h-dvh w-3/5 top-0 left-0 z-50 m-0 rounded-r-2xl scroll 
            py-0 border-r-[1px] 
			border-r-gray-600 bg-white dark:bg-slate-950
			md:w-2/5 lg:w-1/5`}>
				<nav className={`flex items-center justify-center flex-col h-full gap-y-1 w-full`}>
					<div className={`flex items-center justify-between flex-row w-full h-[10%] border-b-[0.01rem] border-b-gray-600`}>
						<div className="w-[85%] flex items-center justify-center flex-row gap-2">
							<div className={`flex items-center justify-center text-base size-9 rounded-[50%]
								tablet:size-12 tablet:text-2xl
								bg-slate-800 text-gray-100
								dark:bg-white dark:text-gray-800`}>H</div>
							<div className={`text-xl text-zinc-800 dark:text-white tablet:text-3xl`}>Portfolio</div>
						</div>
						<div className='w-[15%] px-8 flex items-center justify-center'>
							<CloseButton>
								<MdKeyboardDoubleArrowLeft className={`fill-slate-800 dark:fill-white size-8 md:size-10`} />
							</CloseButton>
						</div>
					</div>
					<div id="menu" className={`h-3/5 w-[100%] pt-8 gap-y-6 flex flex-col items-center
					tablet:gap-y-10`}>
						<a className="nav-button group" href="#">
							<BsFillHouseFill className={`nav-button-icon text-gray-700 dark:text-gray-300
							group-hover:text-green-700 group-active:text-green-700
						`} />
							<span className={`nav-button-text text-gray-700 dark:text-gray-400
							lg:group-hover:text-gray-900 lg:dark:group-hover:text-gray-200
							group-active:group-hover:text-green-700 dark:group-active:group-hover:text-green-700
						`}>{translation("home")}</span>
						</a>
						<a className="nav-button group" href="#services">
							<MdClass className={`nav-button-icon text-gray-700 dark:text-gray-300
							group-hover:text-green-700 group-active:text-green-700
						`} />
							<span className={`nav-button-text text-gray-700 dark:text-gray-400
							lg:group-hover:text-gray-900 lg:dark:group-hover:text-gray-200
							group-active:group-hover:text-green-700 dark:group-active:group-hover:text-green-700
						`}>{translation("services")}</span>
						</a>
						<a className="nav-button group" href="#experiences">
							<MdWork className={`nav-button-icon text-gray-700 dark:text-gray-300
							group-hover:text-green-700 group-active:text-green-700
						`} />
							<span className={`nav-button-text text-gray-700 dark:text-gray-400
							lg:group-hover:text-gray-900 lg:dark:group-hover:text-gray-200
							group-active:group-hover:text-green-700 dark:group-active:group-hover:text-green-700
						`}>{translation("experience")}</span>
						</a>
						<a className="nav-button group" href="#projects">
							<RiGitRepositoryFill className={`nav-button-icon text-gray-700 dark:text-gray-300
							group-hover:text-green-700 group-active:text-green-700
						`} />
							<span className={`nav-button-text text-gray-700 dark:text-gray-400
							lg:group-hover:text-gray-900 lg:dark:group-hover:text-gray-200
							group-active:group-hover:text-green-700 dark:group-active:group-hover:text-green-700
						`}>{translation("projects")}</span>
						</a>
						<a className="nav-button group" href="#contact">
							<IoIosContact className={`nav-button-icon text-gray-700 dark:text-gray-300
							group-hover:text-green-700 group-active:text-green-700
						`} />
							<span className={`nav-button-text text-gray-700 dark:text-gray-400
							group-hover:text-gray-900 lg:dark:group-hover:text-gray-200
							group-active:group-hover:text-green-700 dark:group-active:group-hover:text-green-700
						`}>{translation("contact")}</span>
						</a>
					</div>
					<div className={`h-[30%] w-4/5`}>
						<div className='flex items-center justify-center flex-col h-full w-full gap-y-12 tablet:gap-y-20'>
							<ThemeSwitch />
							<IconsSidebar />
						</div>
					</div>
				</nav>
			</DisclosurePanel>
		</Transition>
	)
}

export default Sidebar
