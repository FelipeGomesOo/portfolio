const getProjectData = async (projectName: string, locale:string) => { 
    const visibleProjects = await fetchPortfolioData(locale);
    const currentProjectIndex = visibleProjects.findIndex(project => project.name === projectName); 
    const currentProject = visibleProjects[currentProjectIndex];

    return {
        project: currentProject, 
        nextProject: visibleProjects[getNextProjectIndex(visibleProjects.length, currentProjectIndex)]
    }; 
     
}

const getNextProjectIndex = (totalProjects: number, currentProjectIndex: number): number => {
    if (currentProjectIndex === totalProjects - 1) {
        return 0;
    }
    return currentProjectIndex + 1;
};

const fetchPortfolioData = async (lang: string) => {
    let data = (await import(`@/lib/data/${lang}/projects`)).default;
     
    data = data.filter(project => project.visible);
    return data;
}

export {getProjectData, fetchPortfolioData};