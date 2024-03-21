import About from '@/components/HomePage/About';
import Contact from '@/components/Contact';
import Portfolio from '@/components/Portfolio';
import Hero from '@/components/HomePage/Hero';  
import { Suspense } from 'react';
 
export default function Home() {  

  return ( 
  <>
    <Hero /> 
    <Suspense fallback={<div>Loading...</div>}>
      <Portfolio filterable={false} limit={6} />
    </Suspense>
    <About />
    <Contact /> 
  </>
  )
}
