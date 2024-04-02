import { Project } from "@/lib/definitions";

const getProjectData = async (projectName: string, locale: string) => {
  const visibleProjects = await fetchPortfolioData(locale);
  const currentProjectIndex = visibleProjects.findIndex(
    (project: Project) => project.name === projectName,
  );
  const currentProject = visibleProjects[currentProjectIndex];

  return {
    project: currentProject,
    nextProject:
      visibleProjects[
        getNextProjectIndex(visibleProjects.length, currentProjectIndex)
      ],
  };
};

const getNextProjectIndex = (
  totalProjects: number,
  currentProjectIndex: number,
): number => {
  if (currentProjectIndex === totalProjects - 1) {
    return 0;
  }
  return currentProjectIndex + 1;
};

const fetchPortfolioData = async (lang: string) => {
  let data = (await import(`@/lib/data/${lang}/projects`)).default;

  data = data.filter((project: Project) => project.visible);
  return data;
};

const animationDelay = (index: number) => {
  return { animationDelay: `calc(0.2s + 0.5s* ${index})` };
};

export { getProjectData, fetchPortfolioData, animationDelay };
