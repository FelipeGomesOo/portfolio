export default function About() {
    return (
        <section id="about" className="container my-12 md:my-24">
            <h2>About</h2> 
            <div className="flex flex-wrap justify-between">
                <h3 className="w-full sm:w-3/6">Trabalho com criação de marcas, design de interfaces digitais e programação frontend. Aqui você também encontra projetos de UX, sinalização, papelaria e embalagem.
                </h3>
                <div className="w-full sm:w-2/5 space-y-4" >
                    <div> 
                            <h4>Experiência</h4>
                            <ul>
                                <li>2020 . 2023 - <a class="inline_link" target="_blank" rel="noreferrer" href="http://www.arajarapark.com.br/">Arajara Park</a> - Gerente de Marketing</li>
                                <li>2019 . 2020 - <a class="inline_link" target="_blank" rel="noreferrer" href="http://www.oowlish.com/">Oowlish</a> - Frontend Designer</li>
                                <li>2013 . 2017 - <a class="inline_link" target="_blank" rel="noreferrer" href="http://www.pedesonhos.com.br/">Pé de Sonhos</a> - Designer Júnior</li><li>2013 . 2013 - <a class="inline_link" target="_blank" rel="noreferrer" href="https://dribbble.com/onespacemedia/">Onespacemedia</a> - Designer</li>
                                <li>2011 . 2011 - <a class="inline_link" target="_blank" rel="noreferrer" href="http://www.piloti.com.br/">Piloti Mobile &amp; Internet</a> - Designer</li>
                            </ul>
                    </div>
                    <div>
                        <h4>Formação Acadêmica</h4>
                        <ul className="space-y-2 md:space-y-0">
                            <li>2021 - MBA em Marketing - <a class="inline_link" target="_blank" rel="noreferrer" href="https://www.espm.br/">ESPM</a>
                            </li>
                            <li>2016 - UX Design - <a class="inline_link" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1tcpddJqf4eTDqPeG7uyJCb_rnxr_BmkH/view">General Assembly</a>
                            </li>
                            <li>2013 - Design Gráfico - <a class="inline_link" target="_blank" rel="noreferrer" href="https://www.anglia.ac.uk/study/undergraduate/graphic-design">Anglia Ruskin University</a>
                            </li>
                        </ul>
                    </div> 
                </div> 
            </div>
        </section>
    )
}