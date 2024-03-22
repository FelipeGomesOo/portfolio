import Image from 'next/image'
import {Link} from '@/navigation'; 
export default function PortfolioProjects({projects}: {projects: Array}){
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-2 sm:space-y-0"> 
        { 
           projects?.map((project, index) => (  
            <Link key={index} className="" href={`/projects/${project.name}`}> 
                <Image 
                    className="w-full h-auto mb-2"
                    src={`/project-thumbs/${project.name}.jpg`} 
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
    )
}
