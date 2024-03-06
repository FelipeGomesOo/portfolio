import Image from "next/image"
import Link from "next/link"
export default function Hero() {
    return (
        <section className="my-12">
            <div className="container flex flex-wrap justify-between items-center ">
                <div className="w-full lg:w-2/6">
                    <div className="mb-6 md:mb-0">
                        <h4>Web app</h4>
                        <h1 className="mb-2 md:mb-4">
                            <strong>Jamming</strong>
                        </h1>
                        <h3>Um aplicativo React para gerir playlists de músicas do Spotify</h3>
                        <Link 
                            className="mr-3" 
                            href="http://www.felipe-gomes.com/jamming/" 
                            target="_blank">
                            Confira o site
                        </Link>
                        <Link 
                            className="inline_link" 
                            href="https://github.com/FelipeGomesOo/react-jamming" 
                            target="_blank">
                            Repositório
                        </Link>
                    </div>
                </div>
                <div className="hidden sm:block lg:w-4/6">
                    <Image 
                        width ={984} 
                        height={570} 
                        className="imagem-destaque" 
                        src="/project-main-img/jamming.jpg" 
                        alt="Jamming" 
                    />
                </div>
            </div>
                <div className="sm:hidden">
                    <Image 
                        width ={984} 
                        height={570} 
                        className="imagem-destaque" 
                        src="/project-main-img/jamming.jpg" 
                        alt="Jamming" 
                    />
                </div>
        </section>
    )
}