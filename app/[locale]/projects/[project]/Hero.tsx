import Image from "next/image";
import { useTranslations } from "next-intl";
import { animationDelay } from "@/lib/utils";
import { Project } from "@/lib/definitions";
export default function Hero({ project }: { project: Project }) {
  const t = useTranslations("ProjectPage");
  return (
    <section>
      <div className="fade-out-down container">
        <h1 style={animationDelay(1)} className="reveal">
          {project.info.shortDescription}
        </h1>
        <div className="flex">
          <h2 style={animationDelay(2)} className="reveal">
            {project.info.tagline} — {project.client.name}
          </h2>
        </div>
      </div>
      <div className="sm:container">
        <Image
          width={984}
          height={570}
          style={animationDelay(3)}
          src={`/project-main-img/${project.name}.jpg`}
          alt={project.client.name}
          className="reveal w-full"
        />
      </div>
    </section>
  );
}
