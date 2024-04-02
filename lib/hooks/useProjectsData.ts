import { useState } from "react";
import { Project } from "@/lib/definitions";

export default function useProjectsData({
  visibleProjects,
}: {
  visibleProjects: Project[];
}) {
  const [filteredProjects, setfilteredProjects] = useState(visibleProjects);
  const [condition, setCondition] = useState("");

  function handleFilter(e: any) {
    setCondition(e.target.value);
    if (e.target.value === "") {
      setfilteredProjects(visibleProjects);
      return;
    }
    setfilteredProjects(
      visibleProjects.filter((proj) => proj.cathegory === e.target.value),
    );
  }

  const data = {
    projects: filteredProjects,
    handleFilter: handleFilter,
    condition: condition,
  };

  return data;
}
