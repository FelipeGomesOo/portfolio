import { useTranslations } from 'next-intl';
export default function Intro(){
    const t = useTranslations('AboutPage.intro') 
    return (
    <section className="my-10 lg:my-16 container">
        <div className="border-b-2 grid grid-cols-12 gap-4 lg:gap-6 pb-10">
            <h2 className="col-span-12 lg:col-span-4">{t('title')}</h2> 
            <div className="col-span-12 lg:col-span-8 "> 
                <h3>{t("p0")}</h3>
                <h3>{t("p1")}</h3> 
                <p className='mb-2'>{t("p2")}</p> 
                <p>{t("p3")}</p> 
            </div>
        </div>
    </section>
    )
}