import Link from "next/link" 
export default function Summary() {
    return (
        <>
            <section className="container my-12">
                <h2>Projeto</h2>
                <div className="flex flex-wrap justify-between items-start">
                    <h3 className="w-full lg:w-3/6">O jamming permite ao usuário pesquisar na biblioteca do Spotify, criar uma playlist personalizada e salvá-la em sua conta do Spotify. Inicialmente foi desenvolvido para fins de estudo e prática no curso Front-End Engineer da Codecademy, no entanto, foram implementadas funcionalidades que não estavam listadas no projeto.</h3>
                    
                    <div className="w-full lg:w-2/5 grid grid-cols-2 gap-3">
                        <div>
                            <h4>Cliente</h4>
                            <a className="" target="_blank" rel="noreferrer" href="http://www.felipe-gomes.com/jamming/">Jamming</a>
                        </div>
                        <div>
                            <h4>Serviços</h4>
                            <p>UI Design, Front-end</p>
                        </div>
                        <div>
                            <h4>Setor</h4>
                            <p>Música</p>
                        </div>
                        <div>
                            <h4>Ferramentas</h4>
                            <p>React, HTML, SASS, Javascript</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}