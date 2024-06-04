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
        let divider = section.type
          ? section.type === 1
            ? "col-span-12 lg:col-span-6"
            : "col-span-12"
          : "col-span-12";

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
            {section.html && (
              <div
                className="col-span-12 flex flex-col gap-10 lg:flex-row"
                dangerouslySetInnerHTML={{ __html: section.html }}
              ></div>
            )}
            {section.video && (
              <div className="col-span-12">
                <video
                  style={{ clipPath: "inset(2px 2px)" }}
                  className="aspect-video w-full  "
                  width={section.video.width}
                  height={section.video.height}
                  preload="auto"
                  playsInline
                  loop
                  autoPlay
                  muted
                >
                  <source
                    src={`/project-galleries/${project.name}/${section.video.src}`}
                    type="video/mp4"
                  />
                  Seu browser não suppor o elemento <code>video</code>.
                </video>
              </div>
            )}
            {section.videos &&
              section.videos.map((video, index) => {
                return (
                  <div
                    key={index}
                    className={`col-span-12 ${getColSpan(video.size)} text-center`}
                  >
                    <video
                      style={{ clipPath: "inset(2px 2px)" }}
                      className=" w-full  "
                      width={video.width}
                      height={video.height}
                      preload="auto"
                      playsInline
                      loop
                      autoPlay
                      muted
                    >
                      <source
                        src={`/project-galleries/${project.name}/${video.src}`}
                        type="video/mp4"
                      />
                      Seu browser não suppor o elemento <code>video</code>.
                    </video>
                  </div>
                );
              })}
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
