'use client'
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { FaMoon } from "react-icons/fa";

const ThemeSwitch = () => {

	const { setTheme, resolvedTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
	}

	return (
		<div className='flex items-center justify-between flex-row w-full gap-y-1 pt-8 tablet:gap-y-6 lg:gap-y-3'>
			<div className='flex justify-center items-center flex-row pl-1 gap-2'>
				<div className='bg-black dark:bg-white rounded-full size-7 flex items-center justify-center'>
					<FaMoon className='text-white dark:text-black size-4' />
				</div>
				<span className='text-sm tablet:text-2xl'>
					Dark Mode
				</span>
			</div>
			<Switch
				checked={resolvedTheme === 'dark'}
				onChange={toggleTheme}
				className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-400 transition data-[checked]:bg-blue-600"
			>
				<span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
			</Switch>
		</div>
	)
}

export default ThemeSwitch
