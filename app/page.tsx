import About from '@/components/HomePage/About';
import Contact from '@/components/HomePage/Contact';
import Portfolio from '@/components/HomePage/Portfolio';
import Image from 'next/image' 

export default function Home() {
  const currentYear = new Date().getFullYear(); 
  return ( 
  <>
    <section className="hero container">
        {/* <h1>{t('homePage.hero.title')} <span>{t('homePage.hero.subtitle')}</span></h1> */}
        <h1 className='my-12 md:my-24'><strong>Oi! Me chamo Felipe.</strong> <span>Eu sou designer e desenvolvedor front-end.</span></h1>
    </section>
    <Portfolio /> 
    <About />
    <Contact />
    <section id="copyright" className="container my-6">
      <small>© {currentYear} – Felipe Gomes</small>
    </section>
  </>
  )
}
