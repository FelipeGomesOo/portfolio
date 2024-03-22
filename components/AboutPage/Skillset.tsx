import { useTranslations,useMessages } from 'next-intl';
export default function Skillset(){
    const t = useTranslations('AboutPage.skillset');
    let messages = useMessages().AboutPage;
    const pskillsKeys = Object.entries(messages.skillset.programming.skills); 
    const dskillsKeys = Object.entries(messages.skillset.design.skills);
     

    return (
            <section className="my-10 lg:my-16 container grid grid-cols-12 gap-4 lg:gap-6">
                <h2 className="col-span-12 lg:col-span-4">{t('title')}</h2>

                <div className="col-span-12 lg:col-span-4">
                    <h3><strong>{t('programming.title')}</strong></h3>
                    { pskillsKeys.map((skill: string[], index:number) => {
                       // console.log(skill ) 
                        return(
                            <div key={index} className="w-full " >
                                <h4 className='block'>{skill[0]}</h4>
                                <h3>{skill[1]}</h3>
                            </div>
                        )
                    }) }
                </div> 
                <div className="col-span-12 lg:col-span-4">
                    <h3><strong>{t('design.title')}</strong></h3>
                    { dskillsKeys.map((skill:  [string, unknown], index:number) => {
                        return(
                            <div key={index} className="w-full " >
                                <h4 className='block'>{skill[0]}</h4>
                                <h3>{skill[1]}</h3>
                            </div>
                        )
                    }) }
                </div>

            </section>
    )
}