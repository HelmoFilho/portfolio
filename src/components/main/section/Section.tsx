import React from 'react'
import SectionHead from './SectionHead'

interface Props {
	children: React.ReactNode,
	head: string,
	anchor: string
}

const Section = ({ children, head, anchor = "#" }: Props) => {
  return (
    <section id={anchor} className="flex items-center justify-center flex-col mt-10 lg:mt-14 lg:mb-14 gap-8 lg:gap-12">
		<SectionHead text = {head} />
		{children}
    </section>
  )
}

export default Section
