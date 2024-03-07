import Image from "next/image"
import Link from "next/link" 
export default function Hero({ project }: any) {
    const hasDemo = project.info.live ? true : false;
    const hasRepo = project.info.githubRepo ? true : false;
    return (
        <section className="my-12">
            <div className="container grid grid-cols-12  items-center gap-2">
                <div className="col-span-12 lg:col-span-5  ">
                    <div className="mb-6 md:mb-0">
                        <h4>{project.info.tagline}</h4>
                        <h1 className="mb-2 md:mb-4 z-10">
                            <strong>{project.client.name}</strong>
                        </h1>
                        <h3>{project.info.shortDescription}</h3>
                        {hasDemo && 
                            <Link 
                                className="mr-3" 
                                href={project.info.live}
                                target="_blank">
                                Confira o site
                            </Link>
                        }
                        {hasRepo && 
                            <Link 
                                className="inline_link" 
                                href={project.info.githubRepo} 
                                target="_blank">
                                Repositório
                            </Link>
                        }
                    </div>
                </div>
                <div className="hidden sm:block col-span-12 lg:col-span-7">
                    <Image 
                        width ={984} 
                        height={570} 
                        className="shadow-md" 
                        src={project.info.mainImage} 
                        alt="Jamming" 
                    />
                </div>
            </div>
            <div className="sm:hidden ">
                <Image 
                    width ={984} 
                    height={570}  
                    src={project.info.mainImage} 
                    alt={project.client.name}
                />
            </div>
        </section>
    )
}