import Hero from "@/components/ProjectPage/Hero"
import Summary from "@/components/ProjectPage/Summary"
import Showcase from "@/components/ProjectPage/Showcase"
import { getProjectData } from "@/lib/utils"
import { Metadata, ResolvingMetadata } from 'next'; 
import NextProject from "@/components/ProjectPage/NextProject"

type Props = {
  params: { project: string, locale: string } 
}

export async function generateMetadata( { params }: Props, parent: ResolvingMetadata ): Promise<Metadata> {  

  let {project} = await getProjectData(params.project, params.locale); 
 
  return {
    title:  project?.client.name, 
    description: project?.info.description,     
  }
}

export default async function Project({ params }: Props) {
  const {project, nextProject} = await getProjectData(params.project, params.locale)   
    return (
        <>
            <Hero project={project}/>
            <Summary project={project} />
            <Showcase project={project} />
            <NextProject project={nextProject} />
        </>
    )
}