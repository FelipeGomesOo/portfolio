import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { Project } from "@/lib/definitions";
export default function NextProject({ project }: { project: Project }) {
  const t = useTranslations("ProjectPage");
  return (
    <section className="mt-24 border-t border-primary-light/20 pt-6 lg:mt-40 lg:pt-16 ">
      <Link
        className="block"
        href={{
          pathname: "/projects/[project]",
          params: { project: project.name },
        }}
      >
        <div className="container">
          <h4 className="fade-in mb-6">{t("next")}</h4>
          <h1 className="fade-in">{project.info.shortDescription}</h1>
          <h2 className="fade-in">
            {project.info.tagline} — {project.client.name}
          </h2>
        </div>
        <div className="fade-in sm:container ">
          <div className="relative h-[30svh] overflow-hidden ">
            <img
              width={984}
              height={570}
              src={`/project-main-img/${project.name}.jpg`}
              alt={project.client.name}
              className="absolute w-full"
            />
          </div>
        </div>
      </Link>
    </section>
  );
}
