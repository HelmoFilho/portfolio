import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from './tsx/EmblaCarousel'

type ImageInterface = {
  src: string
  alt: string
}

type PropType = {
  slides: ImageInterface[]
}

const Carousel = ({ slides }: PropType) => {

  const OPTIONS: EmblaOptionsType = { loop: true }

  return (
    <>
      <div className='bg-zinc-900  h-fit w-fit dark:bg-slate-100'>
        <EmblaCarousel slides={slides} options={OPTIONS} />
      </div>
    </>
  )
}

export default Carousel
