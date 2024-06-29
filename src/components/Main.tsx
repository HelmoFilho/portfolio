import Contact from './main/contacts/Contact'
import Home from './main/home/Home'
import LogoSlider from './main/logoSlider/LogoSlider'
import Projects from './main/projects/Projects'
import Services from './main/services/Services'

const Main = () => {

  return (
    <main>
      <Home />
      <LogoSlider />
      <Services />
      <Projects />
      <Contact />
    </main>
  )
}

export default Main
