import { useTranslations,useMessages } from 'next-intl';
export default function Skillset(){
    const t = useTranslations('AboutPage.skillset');
    const messages = useMessages();

    const pskills = useTranslations('messages.AboutPage.skillset.programming.skills'); 
    const pskillsKeys = Object.entries(messages.AboutPage.skillset.programming.skills);
    const dskills = useTranslations('messages.AboutPage.skillset.design.skills'); 
    const dskillsKeys = Object.entries(messages.AboutPage.skillset.design.skills);

    return (
            <section className="my-10 lg:my-16 container grid grid-cols-12 gap-4 lg:gap-6">
                <h2 className="col-span-12 lg:col-span-4">{t('title')}</h2>

                <div className="col-span-12 lg:col-span-4">
                    <h3><strong>{t('programming.title')}</strong></h3>
                    { pskillsKeys.map((skill: string) => {
                        return(
                            <div key={skill} className="w-full " >
                                <h4 className='block'>{skill[0]}</h4>
                                <h3>{skill[1]}</h3>
                            </div>
                        )
                    }) }
                </div> 
                <div className="col-span-12 lg:col-span-4">
                    <h3><strong>{t('design.title')}</strong></h3>
                    { dskillsKeys.map((skill:  [string, unknown]) => {
                        return(
                            <div key={skill[0]} className="w-full " >
                                <h4 className='block'>{skill[0]}</h4>
                                <h3>{skill[1]}</h3>
                            </div>
                        )
                    }) }
                </div>

            </section>
    )
}