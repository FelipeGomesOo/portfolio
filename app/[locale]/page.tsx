import About from '@/components/HomePage/About';
import Contact from '@/components/HomePage/Contact';
import Portfolio from '@/components/HomePage/Portfolio';
import Hero from '@/components/HomePage/Hero';
import projectsEn from "@/lib/data/EN/projects";
import projectsPT from "@/lib/data/PT/projects";
import Copyright from '@/components/Copyright';  
import {useTranslations} from 'next-intl';

export default function Home() {  
  const l = useTranslations('Locale'); 
  const projects = l('value') === 'en' ? projectsEn : projectsPT;

  return ( 
  <>
    <Hero />
    <Portfolio projects={projects} /> 
    <About />
    <Contact />
    <Copyright />
  </>
  )
}
