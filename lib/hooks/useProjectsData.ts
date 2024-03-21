import { useState } from 'react'; 

export default function useProjectsData({visibleProjects}: any) {   
    const [filteredProjects, setfilteredProjects] = useState(visibleProjects);
    const [condition, setCondition] = useState(''); 

    function handleFilter(e: any) {
        setCondition(e.target.value);
        if(e.target.value === '') {
            setfilteredProjects(visibleProjects);
            return;
        }
        setfilteredProjects(visibleProjects.filter(proj => proj.cathegory === e.target.value));
    }

    const data = {
        projects: filteredProjects,
        handleFilter: handleFilter,
        condition: condition
    };


  return data;
}
