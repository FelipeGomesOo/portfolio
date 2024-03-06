import Image from "next/image";
import Link from "next/link";
export default function Portfolio() {
    const projects = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <section id="portfolio" className="container"> 
            <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-2 sm:space-y-0">
                { 
                    projects.map((project, index) => (
                    <Link key={index} className="" href="/projects/a"> 
                        <Image 
                            className="w-full h-auto mb-2"
                            src="/project-thumbs/jamming.jpg" 
                            alt="Portfolio" 
                            width={648} 
                            height={486} 
                        /> 
                        <h3 className="mb-0">Project Name</h3>
                        <h4>Project Description</h4>
                        
                    </Link>
                    ))
                }
            </div>
           
        </section> 
    )
}