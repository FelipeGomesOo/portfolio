import {useLocale} from 'next-intl'; 
import Image from 'next/image'
import Link from 'next/link';
import MobileNav from '@/components/MobileNav';
import { useTranslations } from 'next-intl';
import LocaleLink from '@/components/LocaleLink';

export default function Header() { 
    const t = useTranslations('Navigation');
    const curLocale = useLocale(); 
    return (
            <header className="container flex items-center justify-between h-24 md:h-32 ">
                <Link href="/" locale={curLocale} >
                    <Image
                        className='w-36 md:w-auto h-auto' 
                        src='/logo-felipe-gomes.svg' 
                        alt="Felipe Gomes Design and Code" 
                        width={196} height={62}
                    />
                </Link>
                <nav className="hidden sm:flex gap-10">
                    <Link href="/projects">{t('work')}</Link>
                    <Link href="/about">{t('about')}</Link>
                    <Link href="/contact">{t('contact')}</Link> 
                    <div className="flex gap-4 border-l pl-8">
                        <LocaleLink locale="en" />
                        <LocaleLink locale="pt" />
                    </div>
                </nav>
                <MobileNav 
                    work={t('work')}
                    about={t('about')}
                    contact={t('contact')}
                />
            </header>
    );
}