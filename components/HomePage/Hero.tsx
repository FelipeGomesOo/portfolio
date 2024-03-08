import {useTranslations} from 'next-intl';
 
export default function Hero() { 
  const t = useTranslations('HomePage.hero');
  return (  
    <section className="container">
      <h1 className='my-12 md:my-24'>
        <strong>{t('title')} </strong>
        {t('subtitle')}
      </h1>
    </section>
)}