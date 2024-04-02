"use client";
import useProjectsData from "@/lib/hooks/useProjectsData";
import PortfolioFilter from "@/components/Portfolio/PortfolioFilter";
import PortfolioProjects from "@/components/Portfolio/PortfolioProjects";
export default function Portfolio({
  filterable = true,
  limit,
  visibleProjects,
}: any) {
  let { projects, handleFilter, condition } = useProjectsData({
    visibleProjects,
  });
  projects = projects?.slice(0, limit);

  return (
    <>
      {filterable && (
        <PortfolioFilter onFilterBy={handleFilter} condition={condition} />
      )}
      <PortfolioProjects projects={projects} />
    </>
  );
}
