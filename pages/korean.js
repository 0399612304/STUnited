import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import About from '../components/About'
import ContactKorean from '../components/ContactKorean'
import Header from '../components/Header'
import Introduce from '../components/Introduce'
import ProjectsKorean from '../components/ProjectsKorean'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import Social from '../components/Social'
import SolutionKorean from '../components/SolutionKorean'
import { useScrollspy } from '../helpers/useScrollspy'
import { CUSTOMERS } from '../stores/customers'
import { FOOTER } from '../stores/footer'
import { NAVIGATIONS } from '../stores/navigations'
import { PROJECTS } from '../stores/projects'
import { SERVICESKOREAN } from '../stores/services'
import { SOLUTIONSKOREAN } from '../stores/solutions'
import { TIMELINESKOREAN } from '../stores/timelines'

const Home = () => {
  const activeId = useScrollspy(NAVIGATIONS, 500)

  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return domLoaded && (
        <>
          <Head>
            <title>ST United</title>
            <link rel="shortcut icon" href="/logo1.png" />
          </Head>
          <Header />
          <Sidebar navigations={NAVIGATIONS} activeId={activeId} />
          <Social />
          <div>
            <Introduce id="introduce" />
            <About id="about" timelines={TIMELINESKOREAN} />
            <Services id="services" services={SERVICESKOREAN} />
            <ProjectsKorean id="projects" projects={PROJECTS} customers={CUSTOMERS} />
            <SolutionKorean id="solutions" solutions={SOLUTIONSKOREAN} />
            <ContactKorean id="contact" footer={FOOTER} />
          </div>
      </>
      )
}

export default Home
