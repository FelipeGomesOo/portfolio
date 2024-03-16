import Link from "next/link"
import {useTranslations} from 'next-intl';

export default function Contact() {
    
    const t = useTranslations('Contact');
    
    return (
    <section id="contatos" className="container my-12 md:my-24"> 
        <h2>{t('title')}</h2>
        <div className="flex flex-wrap ">
            <h3 className="w-full md:w-3/5">                         
                contato@felipe-gomes.com 
                <Link 
                className=" block" 
                    target="_blank" 
                    href="https://api.whatsapp.com/send/?phone=%2B5521991474675&text&type=phone_number&app_absent=0">
                    <span className="text-primary-light">Whatsapp: </span>{t('whatsapp')} 
                    
                </Link>
            </h3>
            <div className="w-full md:w-2/5">
                <h4>{t('see_also')}</h4> 
                <div className="space-x-4">
                    <Link 
                        target="_blank" 
                        href="https://github.com/FelipeGomesOo" >
                        Github
                    </Link>
                    <Link 
                        target="_blank" 
                        href="https://www.behance.net/FelipeGomesO_o" >
                        Behance
                    </Link>
                    <Link 
                        target="_blank" 
                        href="https://www.linkedin.com/in/felipegomesoliveira/" >
                        Linkedin
                    </Link>
                </div>                           
            </div>
        </div>
</section> 
    )
}