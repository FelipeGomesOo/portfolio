import Image from "next/image"
import Link from "next/link"
import Hero from "@/components/ProjectPage/Hero"
import Summary from "@/components/ProjectPage/Summary"
import Showcase from "@/components/ProjectPage/Showcase"
import { getProjectData } from "@/lib/utils"
import { Metadata, ResolvingMetadata } from 'next'; 
import NextProject from "@/components/ProjectPage/NextProject"

type Props = {
  params: { project: string  } 
}

export async function generateMetadata( { params }: Props, parent: ResolvingMetadata ): Promise<Metadata> {  

  let project = await getProjectData(params.project).project; 
 
  return {
    title:  project?.client.name     
  }
}

export default function Project({ params }: Props) {
  const project = getProjectData(params.project).project; 
  const nextProject = getProjectData(params.project).nextProject; 
    return (
        <>
            <Hero project={project}/>
            <Summary project={project} />
            <Showcase project={project} />
            <NextProject project={nextProject} />
        </>
    )
}