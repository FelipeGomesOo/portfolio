import Experience from '@/components/AboutPage/Experience';
import Academic from '@/components/AboutPage/Academic';
import Skillset from '@/components/AboutPage/Skillset';
import { useTranslations } from 'next-intl';
import Intro from '@/components/AboutPage/Intro';
export default function About(){
    const t = useTranslations('AboutPage');  
    return (
        <div>
            <Intro />
            <Experience />
            <Academic />
            <Skillset />
        </div>
    )
}