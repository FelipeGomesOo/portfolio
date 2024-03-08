import Link from "next/link";
import {useTranslations} from 'next-intl'; 
export default function Summary({ project }: any) {
    const tools = project.info.tools.join(", ");
    const services = project.info.services.join(", ");
    const t = useTranslations('ProjectPage'); 
    return (
        <>
            <section className="container my-12">
                <h2>{t("title")}</h2>
                <div className="flex flex-wrap justify-between items-start">
                    <h3 className="w-full lg:w-3/6">{project.info.description}</h3>
                    <div className="w-full lg:w-2/5 grid grid-cols-2 gap-3">
                        <div>
                            <h4>{t("client")}</h4>
                            <Link className="" target="_blank" rel="noreferrer" href={project.client.site}>{project.client.name}</Link>
                        </div>
                        <div>
                            <h4>{t("services")}</h4>
                            <p>{services}</p>
                        </div>
                        <div>
                            <h4>{t("industry")}</h4>
                            <p>{project.client.sector}</p>
                        </div>
                        <div>
                            <h4>{t("resources")}</h4>
                            <p>{tools}</p>
                        </div>
                        { project.client.hasOwnProperty('location') &&
                        <div>
                            <h4>{t("location")}</h4>
                            <p>{project.client.location}</p>
                        </div>
                        }
                        {  project.info.hasOwnProperty('direction') && 
                        <div>
                            <h4>{t("supervision")}</h4>
                            <p>{project.info.direction.name} da <a  className='inline_link' target="_blank" rel="noreferrer" href={project.info.direction.url}>{project.info.direction.company}</a></p>
                        </div> 
                        }
                    </div>
                </div>
            </section>
        </>
    )
}