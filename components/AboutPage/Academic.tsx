import { useTranslations,useMessages } from 'next-intl';
import Link from "next/link"
export default function Academic(){
    const t = useTranslations('AboutPage.academic'); 
    const p = useTranslations('AboutPage.academic.courses'); 
    const messages = useMessages();
    const positionKeys = Object.keys(messages.AboutPage.academic.courses);
    return (
            <section className="my-10 lg:my-16 container">
                <div className="border-b-2 grid grid-cols-12 gap-4 lg:gap-6 pb-10">
                    <h2 className="col-span-12 lg:col-span-4">{t('title')}</h2> 
                    <div className="col-span-12 lg:col-span-8 grid grid-cols-6 gap-6 lg:gap-8">
                        { positionKeys.map((key: any) => {
                            return( 
                                <div key={key} className="col-span-12 lg:col-span-3">
                                    <h4>{p(`${key}.year`)}</h4>
                                    <h3 className='mb-0'> 
                                        <Link target='_blank' href={p(`${key}.link`)}>
                                            {p(`${key}.course`)}
                                            <span className="block">{p(`${key}.institution`)}</span>
                                        </Link>
                                    </h3>
                                    <p className='mt-1'>{p(`${key}.location`)}</p>
                                </div>
                            )
                        }) }
                    </div>
                </div>
            </section>
    )
}