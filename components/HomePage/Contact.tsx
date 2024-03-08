import Image from "next/image"
import Link from "next/link"
import {useTranslations} from 'next-intl';

export default function Contact() {
    
    const t = useTranslations('HomePage.contact');
    
    return (
    <section id="contatos" className="container my-12 md:my-24"> 
        <h2>{t('title')}</h2>
        <div className="flex flex-wrap ">
            <h3 className="w-full md:w-3/5">                         
                <a className="block" href="mailto:contato@felipe-gomes.com">contato@felipe-gomes.com</a> 
                <Image className="inline" width="22" height={22} src="/whatsapp.svg" alt="Whatsapp"/>
                <span className="telefone">&nbsp;(21)&nbsp;99147-4675</span>
            </h3>
            <div className="w-full md:w-2/5">
                <h4>{t('see_also')}</h4> 
                <div className="space-x-4">
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
                    <Link 
                        target="_blank" 
                        href="https://github.com/FelipeGomesOo" >
                        Github
                    </Link>
                </div>                           
            </div>
        </div>
</section> 
    )
}