import Section from '../section/Section';

import CobapCargoProject from './projectModals/CobapCargoProject';
import JSMarketplaceProject from './projectModals/JSMarketplaceProject';
import PinheiroSeparationProject from './projectModals/PinheiroSeparationProject';

const Projects = () => {

  return (
    <Section head={"Projects"} anchor={"projects"}>
      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      >
        <JSMarketplaceProject />
        <CobapCargoProject />
        <PinheiroSeparationProject />
      </div>
      <div className='flex justify-center items-center mt-3 md:mt-7'>
        <a className='text-xl text-green-700 dark:text-green-500 font-extrabold'
          href="https://github.com/HelmoFilho?tab=repositories" target="_blank"
        >
          {"repository of my projects"}
        </a>
      </div>
    </Section>
  )
}

export default Projects
