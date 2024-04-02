import Link from "next/link";
import { useTranslations } from "next-intl";
import { animationDelay } from "@/lib/utils";
import { Project } from "@/lib/definitions";
export default function Summary({ project }: { project: Project }) {
  const tools = project.info.tools.join(", ");
  const services = project.info.services.join(", ");
  const t = useTranslations("ProjectPage");
  const hasDemo = project.info.live ? true : false;
  const hasRepo = project.info.githubRepo ? true : false;
  return (
    <>
      <section style={animationDelay(4)} className="reveal container my-12 ">
        <h2 className="fade-in ">{t("title")}</h2>
        <div className="flex flex-wrap items-start justify-between">
          <div className="mb-16 w-full sm:mb-0 lg:w-3/6">
            <h3 className="fade-in ">{project.info.description}</h3>
            {hasDemo && (
              <Link
                className="fade-in button medium mr-3"
                href={project.info.live ?? ""}
                target="_blank"
              >
                {t("liveButon")}
              </Link>
            )}
            {hasRepo && (
              <Link
                className=" fade-in button medium"
                href={project.info.githubRepo ?? ""}
                target="_blank"
              >
                {t("githubButon")}
              </Link>
            )}
          </div>
          <div className="fade-in grid w-full grid-cols-2 gap-3 lg:w-2/5 ">
            <div>
              <h4>{t("client")}</h4>
              <Link
                className=""
                target="_blank"
                rel="noreferrer"
                href={project.client.site ?? ""}
              >
                {project.client.name}
              </Link>
            </div>
            <div>
              <h4>{t("services")}</h4>
              <p>{services}</p>
            </div>
            <div>
              <h4>{t("industry")}</h4>
              <p>{project.client.sector}</p>
            </div>
            <div>
              <h4>{t("resources")}</h4>
              <p>{tools}</p>
            </div>
            {project.client.hasOwnProperty("location") && (
              <div>
                <h4>{t("location")}</h4>
                <p>{project.client.location}</p>
              </div>
            )}
            {project.info.hasOwnProperty("direction") && (
              <div>
                <h4>{t("supervision")}</h4>
                <p>
                  {project.info.direction?.name} da{" "}
                  <a
                    className="inline_link"
                    target="_blank"
                    rel="noreferrer"
                    href={project.info.direction?.url}
                  >
                    {project.info.direction?.company}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
