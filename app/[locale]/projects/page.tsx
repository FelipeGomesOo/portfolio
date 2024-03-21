import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";

export default function Projects( ) {
    return (
        <section> 
            <div className="pb-24">
                <Portfolio seeAll={false} />
                <Contact />
            </div>
        </section>
    )
}