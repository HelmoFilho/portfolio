'use client'

import Carousel from '@/components/carousel/Carousel';
import CloseModalButton from '@/components/modal/CloseModalButton';
import OpenModalButton from '@/components/modal/OpenModalButton';
import { AnimatePresence } from "framer-motion";
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Modal from '../../../modal/Modal';
import ProjectCard from '../ProjectCard';

import { SiDocker, SiFastapi, SiLinux, SiPostgresql } from "react-icons/si";

const PinheiroSeparationProject = () => {

	const t = useTranslations('Main.Projects.PinheiroSeparationProject');

	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	const images = [
		{
			src: './images/projects/pinheiro/01.png',
			alt: "pinheiro 01"
		},
		{
			src: './images/projects/pinheiro/02.png',
			alt: "pinheiro 02"
		},
		{
			src: './images/projects/pinheiro/03.png',
			alt: "pinheiro 03"
		},
	]

	return (
		<>
			<OpenModalButton openHandle={openModal}>
				<ProjectCard src={"./images/projects/pinheiro/01.png"} projectName={t("name")} />
			</OpenModalButton>

			<AnimatePresence
				initial={false}
				mode="wait"
				onExitComplete={() => null}
			>
				{modalOpen && <Modal handleClose={closeModal}>
					<div
						className='w-[90%] min-h-fit md:h-[60%] lg:h-[70%] bg-slate-100 dark:bg-gray-950 p-4 flex items-center justify-cente flex-col lg:flex-row 
							gap-y-10 lg:gap-x-6'
					>
						<CloseModalButton closeHandle={closeModal} />
						<Carousel slides={images} />
						<div className='px-2 flex gap-4 flex-col'>
							<h3
								className='text-2xl uppercase text-zinc-700 dark:text-zinc-200  font-bold text-wrap text-center
								md:text-4xl'
							>{t("name")}</h3>
							<p className='text-zinc-700 dark:text-zinc-200 font-medium md:text-xl'>
								{t("description")}
							</p>
							<div className='flex flex-row items-center justify-start gap-3'>
								<div className='border-[2px] border-slate-600 rounded-full size-16 md:size-20 flex items-center justify-center'>
									<SiFastapi className="h-10 md:h-12 w-auto" />
								</div>
								<div className='border-[2px] border-slate-600 rounded-full size-16 md:size-20 flex items-center justify-center'>
									<SiPostgresql className="h-10 md:h-12 w-auto" />
								</div>
								<div className='border-[2px] border-slate-600 rounded-full size-16 md:size-20 flex items-center justify-center'>
									<SiDocker className="h-10 md:h-12 w-auto" />
								</div>
								<div className='border-[2px] border-slate-600 rounded-full size-16 md:size-20 flex items-center justify-center'>
									<SiLinux className="h-10 md:h-12 w-auto" />
								</div>
							</div>
						</div>
					</div>
				</Modal>}
			</AnimatePresence>
		</>
	)
}

export default PinheiroSeparationProject
