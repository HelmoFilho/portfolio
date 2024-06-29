import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const IconsSidebar = () => {
	return (
		<div className='flex items-center justify-between gap-x-7 flex-row pb-5'>

			<a className='size-10 tablet:size-16 group' href="https://www.linkedin.com/in/helmo-filho-02370b141/" target="_blank">
				<div className='rounded-2xl border-[1px] flex items-center justify-center h-full w-full 
							border-gray-600
							lg:group-hover:group-active:bg-gray-600
							group-hover:bg-gray-800'>
					<FaLinkedin className='size-5 tablet:size-8
						text-gray-900 group-active:group-hover:text-slate-100 group-hover:text-slate-100
						dark:text-gray-100'/>
				</div>
			</a>

			<a className='size-10 tablet:size-16 group' href="https://github.com/HelmoFilho" target="_blank">
				<div className='rounded-2xl border-[1px] flex items-center justify-center h-full w-full 
							border-gray-600
							lg:group-hover:group-active:bg-gray-600
							group-hover:bg-gray-800'>
					<FaGithub className='size-5 tablet:size-8
						text-gray-900 group-active:group-hover:text-slate-100 group-hover:text-slate-100
						dark:text-gray-100'/>
				</div>
			</a>

			<a className='size-10 tablet:size-16 group' href="mailto:helmofilho09@gmail.com">
				<div className='rounded-2xl border-[1px] flex items-center justify-center h-full w-full 
							border-gray-600
							lg:group-hover:group-active:bg-gray-600
							group-hover:bg-gray-800'>
					<SiGmail className='size-5 tablet:size-8
						text-gray-900 group-active:group-hover:text-slate-100 group-hover:text-slate-100
						dark:text-gray-100'/>
				</div>
			</a>
		</div>
	)
}

export default IconsSidebar
