
interface Props {
  heading: string,
  text: string,
  src?: string,
  alt?: string
}

const ServiceBlock = ({ heading, text, src, alt }: Props) => {
  return (
    <div className='bg-slate-100 dark:bg-gray-950 border-[1px] border-slate-400 dark:border-gray-700 min-h-fit w-80 px-10 py-7 overflow-hidden gap-y-6 flex items-center flex-col flex-grow
      lg:w-96 lg:min-h-fit lg:max-h-80'>
      <div className='flex items-center gap-x-9 md:gap-x-12'>
        <h4 className='text-zinc-700 dark:text-zinc-200 text-xl font-extrabold'>
          {heading}
        </h4>
        {src && <img src={src} alt={alt ? alt : ""} className='w-auto max-h-16' />}
      </div>
      <p className='overflow-hidden flex max-h-[10.5rem] text-lg text-zinc-800 dark:text-zinc-300 text-pretty'>
        {text}
      </p>
    </div>
  )
}

export default ServiceBlock


