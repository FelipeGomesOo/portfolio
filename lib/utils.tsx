import projects from "@/lib/data/EN/projects";
const getProjectData = (projectName: string) => {
    const visibleProjects = projects.filter(project => project.visible === true);
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

export {getProjectData};