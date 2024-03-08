import Image from "next/image"
import Link from "next/link"
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

  let project = getProjectData(params.project, params.locale).project; 
 
  return {
    title:  project?.client.name, 
    description: project?.info.description,     
  }
}

export default function Project({ params }: Props) {
  const project = getProjectData(params.project, params.locale).project; 
  const nextProject = getProjectData(params.project, params.locale).nextProject; 
    return (
        <>
            <Hero project={project}/>
            <Summary project={project} />
            <Showcase project={project} />
            <NextProject project={nextProject} />
        </>
    )
}