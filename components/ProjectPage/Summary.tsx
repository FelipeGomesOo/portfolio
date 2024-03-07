import Link from "next/link" 
export default function Summary({ project }: any) {
    const tools = project.info.tools.join(", ");
    const services = project.info.services.join(", ");
    return (
        <>
            <section className="container my-12">
                <h2>Projeto</h2>
                <div className="flex flex-wrap justify-between items-start">
                    <h3 className="w-full lg:w-3/6">{project.info.description}</h3>
                    <div className="w-full lg:w-2/5 grid grid-cols-2 gap-3">
                        <div>
                            <h4>Cliente</h4>
                            <Link className="" target="_blank" rel="noreferrer" href={project.client.site}>{project.client.name}</Link>
                        </div>
                        <div>
                            <h4>Serviços</h4>
                            <p>{services}</p>
                        </div>
                        <div>
                            <h4>Setor</h4>
                            <p>{project.client.sector}</p>
                        </div>
                        <div>
                            <h4>Ferramentas</h4>
                            <p>{tools}</p>
                        </div>
                        { project.client.hasOwnProperty('location') &&
                        <div>
                            <h4>Localização</h4>
                            <p>{project.client.location}</p>
                        </div>
                        }
                        {  project.info.hasOwnProperty('direction') && 
                        <div>
                            <h4>Direção</h4>
                            <p>{project.info.direction.name} da <a  className='inline_link' target="_blank" rel="noreferrer" href={project.info.direction.url}>{project.info.direction.company}</a></p>
                        </div> 
                        }
                    </div>
                </div>
            </section>
        </>
    )
}