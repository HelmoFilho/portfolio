import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Section from '../section/Section';

const Contact = () => {
	return (
		<Section head={"Contact"} anchor={"contact"}>
			<div className='flex items-center justify-center flex-col gap-4'>
				<h3 className="text-xl md:text-3xl lg:text-2xl">
					{"Let's stay in touch!"}
				</h3>
				<h4 className='text-lg md:text-2xl lg:text-lg font-medium text-emerald-800 dark:text-emerald-400 mb-6'>
					helmofilho09@gmail.com
				</h4>
				<div className='flex items-center justify-between gap-x-7 flex-row pb-5'>
					<a className='size-10 tablet:size-16 group' href="https://www.linkedin.com/in/helmo-filho-02370b141/" target="_blank">
						<div className='flex items-center justify-center h-full w-full'>
							<FaLinkedin className='size-7 md:size-10 text-zinc-800 dark:text-zinc-400' />
						</div>
					</a>

					<a className='size-10 tablet:size-16 group' href="https://github.com/HelmoFilho" target="_blank">
						<div className='flex items-center justify-center h-full w-full'>
							<FaGithub className='size-7 md:size-10 text-zinc-800 dark:text-zinc-400' />
						</div>
					</a>

					<a className='size-10 tablet:size-16 group' href="mailto:helmofilho09@gmail.com">
						<div className='flex items-center justify-center h-full w-full'>
							<SiGmail className='size-7 md:size-10 text-zinc-800 dark:text-zinc-400' />
						</div>
					</a>
				</div>
			</div>
		</Section>
	)
}

export default Contact
