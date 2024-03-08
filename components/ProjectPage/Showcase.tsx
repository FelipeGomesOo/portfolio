import Image from "next/image"
export default function Showcase({ project }: any) {
    
    const getColSpan = (size: number) => {
        switch (size) {
            case 3: return "lg:col-span-3";
            case 4: return "lg:col-span-4";
            case 6: return "lg:col-span-6";
            case 12: return "lg:col-span-12";
        }
    }
    return (
        <section className="container space-y-8 lg:space-y-16">
        {   project.sections.map((section, index) => {
            let divider = section.thumbs ? (section.thumbs.length === 1 ? 'col-span-12 lg:col-span-6' : 'col-span-12') : '';  
            
            return (
                <div className="grid grid-cols-12 lg:gap-x-6 items-center" key={index}>
                    <div className={divider}>
                        <h2>{section.title}</h2>
                        {section.hasOwnProperty('subtitle') && 
                            <h3>{section.subtitle}</h3>
                        }
                    </div> 
                    {
                        section.video && 
                        <div className=""> 
                            <iframe    
                                width={section.video.width} 
                                height={section.video.height} 
                                src={section.video.src} title={section.video.title}    
                                allowFullScreen={true}
                            />
                        </div>
                    } 
                    <div className={`${divider} grid grid-cols-12 gap-6`}>
                        {section.thumbs &&
                            section.thumbs.map((thumb: string, index) => {
                            return (
                                <div
                                    className={`col-span-12 ${getColSpan(thumb.size)}`}
                                    key={index}>
                                    <Image
                                        src={thumb.src}
                                        alt={thumb.alt}
                                    />
                                    {
                                    thumb.hasOwnProperty('alt') &&
                                        <figcaption className="mt-1 text-sm  text-primary-light/80 "> 
                                            {thumb.alt}
                                        </figcaption>
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
            );
        })}
    </section>
)}