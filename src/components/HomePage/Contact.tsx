import Image from "next/image"
import Link from "next/link"

export default function Contact() {
    return (
    <section id="contatos" className="container my-12 md:my-24"> 
        <h2>Contato</h2>
        <div className="flex flex-wrap ">
            <h3 className="w-full md:w-3/5">                         
                <a className="block" href="mailto:contato@felipe-gomes.com">contato@felipe-gomes.com</a> 
                <Image className="inline" width="22" height={22} src="/whatsapp.svg" alt="Whatsapp"/>
                <span className="telefone">&nbsp;(21)&nbsp;99147-4675</span>
            </h3>
            <div className="w-full md:w-2/5">
                <h4>See also</h4> 
                <div className="space-x-4">
                    <Link className="behance inline_link" target="_blank" rel="noreferrer" href="https://www.behance.net/FelipeGomesO_o" >
                        <span>Behance</span>
                    </Link>
                    <Link className="linkedin inline_link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/felipegomesoliveira/" >
                        <span>Linkedin</span>
                    </Link>
                    <Link className="github inline_link" target="_blank" rel="noreferrer" href="https://github.com/FelipeGomesOo" >
                        <span>Github</span>
                    </Link>
                </div>                           
            </div>
        </div>
</section> 
    )
}