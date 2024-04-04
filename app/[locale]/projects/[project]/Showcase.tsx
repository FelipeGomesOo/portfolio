import { Project } from "@/lib/definitions";
import Image from "next/image";
export default function Showcase({ project }: { project: Project }) {
  const getColSpan = (size: number) => {
    switch (size) {
      case 3:
        return "lg:col-span-3";
      case 4:
        return "lg:col-span-4";
      case 6:
        return "lg:col-span-6";
      case 12:
        return "lg:col-span-12";
    }
  };
  return (
    <section className="container space-y-8 lg:space-y-16">
      {project.sections.map((section, index) => {
        let divider = section.thumbs
          ? section.thumbs.length === 1
            ? "col-span-12 lg:col-span-6"
            : "col-span-12"
          : "";

        return (
          <div
            className="grid grid-cols-12 items-center lg:gap-x-6"
            key={index}
          >
            <div className={divider}>
              <h2 className="fade-in ">{section.title}</h2>
              {section.hasOwnProperty("subtitle") && (
                <h3>{section.subtitle}</h3>
              )}
            </div>
            {section.video && (
              <div className="">
                <iframe
                  width={section.video.width}
                  height={section.video.height}
                  src={section.video.src}
                  title={section.video.title}
                  allowFullScreen={true}
                />
              </div>
            )}
            <div className={`${divider} grid grid-cols-12 gap-6`}>
              {section.thumbs &&
                section.thumbs.map((thumb, index) => {
                  return (
                    <div
                      className={`col-span-12 ${getColSpan(thumb.size)} text-center`}
                      key={index}
                    >
                      <Image
                        src={`/project-galleries/${project.name}/${thumb.src}`}
                        alt={thumb.alt ? thumb.alt : project.client.name}
                        width={Number(thumb.w) ?? 50}
                        height={Number(thumb.h) ?? 50}
                        className="fade-in inline"
                      />
                      {thumb.hasOwnProperty("alt") && (
                        <figcaption className="fade-in mt-1  text-sm text-primary-light/80 ">
                          {thumb.alt}
                        </figcaption>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
