import Image from "next/image"
import Link from "next/link" 
export default function NextProject({ project }: any) { 
    return (
        <section className="mt-24 lg:mt-40 pt-6 lg:pt-16 border-t border-primary-light/20 ">
            <Link className="block" href={`/projects/${project.name}`}>
                <h4 className="container mb-6 ">Next Project</h4>
                <div className="container grid grid-cols-12 gap-2 items-center ">
                    <div className="col-span-12 lg:col-span-5">
                        <div className="mb-6 md:mb-0">
                             
                            <h1 className="mb-2 md:mb-4 z-10">
                                <strong>{project.client.name}</strong>
                            </h1>
                            <h3>{project.info.shortDescription}</h3>
                        </div>
                    </div>
                    <div className="hidden sm:block col-span-12 lg:col-span-7">
                        <Image
                            width ={984}
                            height={570} 
                            src={project.info.mainImage}
                            alt={project.client.name}
                        />
                    </div>
                </div>
                    <div className="sm:hidden">
                        <Image
                            width ={984}
                            height={570} 
                            src={project.info.mainImage}
                            alt={project.client.name}
                        />
                    </div>
            </Link>
        </section>
    )
}