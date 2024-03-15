import Experience from '@/components/AboutPage/Experience';
import Academic from '@/components/AboutPage/Academic';
import Skillset from '@/components/AboutPage/Skillset'; 
import Intro from '@/components/AboutPage/Intro';
export default function About(){ 
    return (
        <div>
            <Intro />
            <Experience />
            <Academic />
            <Skillset />
        </div>
    )
}