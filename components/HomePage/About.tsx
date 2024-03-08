import {useTranslations} from 'next-intl';
import Link from "next/link"

export default function About() {
    const t = useTranslations('HomePage.about');
    return (
        <section id="about" className="container my-12 md:my-24">
            <h2>{t('title')}</h2> 
            <div className="flex flex-wrap justify-between">
                <h3 className="w-full sm:w-3/6">
                    {t('description')}
                </h3>
                <div className="w-full sm:w-2/5 space-y-4" >
                    <div> 
                            <h4>{t('xp.title')}</h4>
                            <ul>
                                <li>2020 . 2023 - 
                                    <Link 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        href="http://www.arajarapark.com.br/">
                                        Arajara Park
                                    </Link>  
                                        {` - ${t('xp.pos.arajara')}`}
                                    </li>
                                <li>2019 . 2020 - 
                                    <Link 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        href="http://www.oowlish.com/">
                                            Oowlish
                                        </Link> 
                                        {` - ${t('xp.pos.oowlish')}`}
                                </li>
                                <li>2013 . 2017 - 
                                    <Link 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        href="http://www.pedesonhos.com.br/">
                                            Pé de Sonhos
                                        </Link>
                                        {` - ${t('xp.pos.pds')}`}
                                </li>
                                <li>2013 . 2013 - 
                                    <Link target="_blank" 
                                        rel="noreferrer" 
                                        href="https://dribbble.com/onespacemedia/">
                                            Onespacemedia
                                    </Link>
                                    {` - ${t('xp.pos.onespacemedia')}`}
                                </li>
                                <li>2011 . 2011 - 
                                    <Link 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        href="http://www.piloti.com.br/">
                                            Piloti Mobile &amp; Internet
                                    </Link>
                                    {` - ${t('xp.pos.piloti')}`}
                                </li>
                            </ul>
                    </div>
                    <div>
                        <h4>{t('acad.title')}</h4>
                        <ul className="space-y-2 md:space-y-0">
                            <li>
                                2021{` - ${t('acad.course.01')} - `} 
                                <Link 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    href="https://www.espm.br/">ESPM
                                </Link>
                            </li>
                            <li>
                                2016{` - ${t('acad.course.02')} - `} 
                                <Link 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    href="https://drive.google.com/file/d/1tcpddJqf4eTDqPeG7uyJCb_rnxr_BmkH/view">General Assembly
                                </Link>
                            </li>
                            <li>
                                2013 {` - ${t('acad.course.03')} - `}  
                                <Link 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    href="https://www.anglia.ac.uk/study/undergraduate/graphic-design">Anglia Ruskin University
                                </Link>
                            </li>
                        </ul>
                    </div> 
                </div> 
            </div>
        </section>
    )
}