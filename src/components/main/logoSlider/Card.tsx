
interface CardProps {
  src: string,
  alt: string
}

const Card = ({ src, alt }: CardProps) => {
  return (
    <img src={src} alt={alt} className='mx-8 size-20 flex-shrink' />
  )
}

export default Card
