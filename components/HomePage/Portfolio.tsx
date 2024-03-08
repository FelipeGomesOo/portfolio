import Image from "next/image";
import Link from "next/link"; 
export default function Portfolio({projects}:{projects: Array<any>}) {
     
    return (
        <section id="portfolio" className="container"> 
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-2 sm:space-y-0">
                { 
                    projects.map((project, index) => (project.visible && 
                    <Link key={index} className="" href={`/projects/${project.name}`}> 
                        <Image 
                            className="w-full h-auto mb-2"
                            src={project.info.thumb} 
                            alt={project.client.name} 
                            width={648} 
                            height={486} 
                        /> 
                        <h3 className="mb-0">{project.client.name}</h3>
                        <h4>{project.info.tagline}</h4>
                    </Link>
                    ))
                }
            </div>
           
        </section> 
    )
}