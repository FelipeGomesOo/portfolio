"use client";
import Image from "next/image";
import { Link } from "@/navigation";
import FadeIn from "@/components/FadeIn";
import { Project } from "@/lib/definitions";
export default function PortfolioProjects({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <div className="grid gap-4 gap-y-12 md:grid-cols-2  lg:grid-cols-3 ">
      {projects?.map((project, index: number) => (
        <div key={project.name} className="group">
          <FadeIn index={index}>
            <Link
              href={{
                pathname: `/projects/[project]`,
                params: { project: project.name },
              }}
            >
              <div className="relative block overflow-hidden ">
                <img
                  className="transition-all duration-500 ease-in-out md:group-hover:scale-105  "
                  src={`/project-thumbs/${project.name}.jpg`}
                  alt={project.client.name}
                  width={648}
                  height={486}
                />
                <div className="absolute right-4 top-0 flex gap-2 ">
                  {project.info.tools.map((tool: string, index: number) => (
                    <small
                      key={tool}
                      style={{ transitionDelay: `${index * 50}ms` }}
                      className="mb-0 rounded-sm bg-[#fff] px-2 text-primary opacity-0 transition-all duration-500 ease-in-out  group-hover:opacity-100   md:z-20 md:group-hover:translate-y-3"
                    >
                      {tool}
                    </small>
                  ))}
                </div>
              </div>
              <div className="transition-all duration-500 ease-in-out md:group-hover:translate-y-2">
                <h4 className="mt-3  flex items-center gap-2">
                  {project.info.tagline} — {project.client.name}
                </h4>
                <h3 className="mb-0 ">{project.info.shortDescription}</h3>
              </div>
            </Link>
          </FadeIn>
        </div>
      ))}
    </div>
  );
}
