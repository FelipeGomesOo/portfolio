import Hero from "./Hero";
import Summary from "./Summary";
import Showcase from "./Showcase";
import NextProject from "./NextProject";
import { fetchPortfolioData, getProjectData } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/navigation";
import { Project } from "@/lib/definitions";

type ProjectData = {
  locale: string;
  project: string;
};

export async function generateStaticParams(): Promise<ProjectData[]> {
  const staticParams: ProjectData[] = [];

  await Promise.all(
    locales.map(async (locale) => {
      const projects = await fetchPortfolioData(locale);
      staticParams.push(
        ...projects.map((project: Project) => ({
          locale,
          project: project.name,
        })),
      );
    }),
  );

  return staticParams;
}

type Props = {
  params: { project: string; locale: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  let { project } = await getProjectData(params.project, params.locale);

  return {
    title: project?.client.name,
    description: project?.info.description,
  };
}

export default async function Project({
  params: { locale, project },
}: {
  params: { locale: string; project: string };
}) {
  const { project: CurrentProject, nextProject } = await getProjectData(
    project,
    locale,
  );
  unstable_setRequestLocale(locale);

  return (
    <>
      <section className=" pt-[40%] lg:pt-[15%]">
        <Hero project={CurrentProject} />
        <Summary project={CurrentProject} />
        <Showcase project={CurrentProject} />
        <NextProject project={nextProject} />
      </section>
    </>
  );
}
