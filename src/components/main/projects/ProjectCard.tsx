
interface Props {
	src: string,
	alt?: string,
	projectName: string
}

const ProjectCard = ({ src, alt = "", projectName }: Props) => {
	return (
		<div className=' h-[55vh] w-80 lg:w-96 bg-slate-100 dark:bg-gray-950 border-[1px] border-slate-400 dark:border-gray-700 '>
			<div className=' h-4/5 overflow-hidden bg-zinc-900 dark:bg-slate-100'>
				<img src={src} alt={alt}
					className='w-full h-full object-scale-down' />
			</div>
			<div className='h-1/5 flex items-center justify-center border-[1px] border-slate-400 dark:border-gray-700 px-3'>
				<p className='text-lg uppercase text-green-700 dark:text-green-500 font-bold text-wrap text-center'>
					{projectName}
				</p>
			</div>
		</div>
	)
}

export default ProjectCard
