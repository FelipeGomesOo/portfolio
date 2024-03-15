import { useTranslations,useMessages } from 'next-intl';
import Link from "next/link"
export default function Experience(){
    const t = useTranslations('AboutPage'); 
    const p = useTranslations('AboutPage.experience.positions'); 
    const messages = useMessages();
    const positionKeys = Object.keys(messages.AboutPage.experience.positions);
    return (
    <section className="my-10 lg:my-16 container">
        <div className="border-b-2 grid grid-cols-12 gap-4 lg:gap-6 pb-10">
            <h2 className="col-span-12 lg:col-span-4">{t('experience.title')}</h2> 
            <div className="col-span-12 lg:col-span-8  lg:grid grid-col-2 gap-x-8 grid-flow-col grid-rows-3 items-stretch">
                { positionKeys.map((key: any) => {
                    return(
                        <div key={key} className='lg:col-span-1 w-100 mb-8 lg:h-40 group hover:z-10 overflow-visible'>
                            <div className="w-full lg:group-hover:outline group-hover:outline-[50px] outline-[#FFF]  rounded-sm lg:group-hover:shadow-[0_35px_60px_0px_rgba(0,0,0,0.5)] duration-0 ease-in-out  transition-all group-hover:duration-150">
                                <h4>{p(`${key}.period`)}</h4>
                                <h3 className="mb-1"><Link target='_blank'  href={p(`${key}.link`)}>{key}<br /> {p(`${key}.position`)}</Link></h3>
                                <p className='lg:line-clamp-2 group-hover:line-clamp-none group-hover:bg-[#fff]'>{p(`${key}.description`)}</p>
                            </div>
                        </div>  
                    )
                }) }
            </div>
        </div>
    </section>
    )
}