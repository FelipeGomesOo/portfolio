import { Project } from "@/lib/definitions";

const projectsData: Project[] = [
  {
    name: "primavera-dos-paes",
    visible: true,
    cathegory: "design",
    client: {
      name: "Primavera dos Pães",
      site: "https://primaveradospaes.com.br/",
      sector: "Padaria",
      location: "Rio de Janeiro, RJ",
    },
    info: {
      tagline: "Site institucional",
      shortDescription: "Headless CMS para Padaria Artesanal Orgânica do Rio.",
      description:
        "Desenvolvi um novo site com sistema de gerenciamento de conteúdo personalizado para Primavera dos Pães, uma padaria artesanal orgânica do Rio de Janeiro. O site antigo apresentava problemas de performance, o conteúdo não contemplava detalhes sobre as lojas e os produtos e o gerenciamento do conteúdo precisava de uma divisão mais simples para facilitar a gestão.",
      services: ["UI Design", "Front-end", "CMS"],
      tools: ["Next.js", "GraphQl", "Tailwind", "Typescript", "Wordpress"],
      live: "https://primaveradospaes.com.br/",
      githubRepo: "https://github.com/FelipeGomesOo/primavera-dos-paes",
    },
    sections: [
      {
        title: "Objetivos o projeto",
        html: " <div class='flex-1 w-full'><p>Criar uma experiência digital para o catálogo de produtos e lojas físicas, enquanto comunicamos os valores da padaria.</p></div><div class='flex-1 w-full'><p>Aprimorar a performance do site com base nos padrões do Google Core Web Vitals, garantindo uma navegação rápida e eficiente.</p></div><div class='flex-1 w-full'><p>Simplificar o gerenciamento do conteúdo do site, permitindo atualizações diretas e intuitivas, sem a necessidade de conhecimento técnico.</p></div>",
      },
      {
        title: "O projeto se dividiu em 3 partes",
        html: " <div class='flex-1 w-full'><h4>UI Design</h4><p>Propomos uma interface que acomoda um baita acervo de imagens da padaria para ajudar o visitante a entender a Primavera, não apenas através das fotos exuberantes de seus produtos artesanais, mas através das pessoas, dos ambientes e dos processos.</p></div><div class='flex-1 w-full'><h4>Front-end</h4><p> Para uma boa performance escolhemos Next.js e hospedamos o front na Vercel. O conteúdo é carregado via API do Wordpress utilizando GraphQl, gerado estaticamente, mas atualizado de forma incremental (ISR) pelo Next. Animações, grids e responsividade ficaram por conta do Tailwind. </p></div> <div class='flex-1 w-full'><h4>Gerenciamento de Conteúdo</h4> <p>Criamos seções e campos personalizados no Wordpress para que a equipe da padaria se sinta segura para editar à vontade todo o conteúdo do site. A seleção de imagens e composição de textos é quase toda feita por eles. Sou suspeito, mas acho que eles estão de parabéns. </p></div>",
      },
      {
        video: {
          width: 1500,
          height: 842,
          src: "primavera-video-01.mp4",
          size: 12,
        },
      },
      {
        video: {
          width: 1500,
          height: 842,
          src: "primavera-video-02.mp4",
          size: 12,
        },
      },
      {
        video: {
          width: 1500,
          height: 842,
          src: "primavera-video-03.mp4",
          size: 12,
        },
      },

      {
        video: {
          width: 1500,
          height: 842,
          src: "primavera-video-wordpress.mp4",
          size: 12,
        },
      },
      {
        videos: [
          {
            width: 1920,
            height: 1080,
            src: "phone-01.mp4",
            size: 4,
          },
          {
            width: 1920,
            height: 1080,
            src: "phone-02.mp4",
            size: 4,
          },
          {
            width: 1920,
            height: 1080,
            src: "phone-03.mp4",
            size: 4,
          },
        ],
      },
    ],
  },
  {
    name: "jamming",
    visible: true,
    cathegory: "code",
    client: {
      name: "Jamming",
      site: "https://felipegomesoo.github.io/react-jamming/",
      sector: "Música",
    },
    info: {
      tagline: "Web app",
      shortDescription:
        "Aplicativo React para gerir playlists de músicas do Spotify",
      description:
        "O jamming permite ao usuário pesquisar na biblioteca do Spotify, criar uma playlist personalizada e salvá-la em sua conta do Spotify. Inicialmente foi desenvolvido para fins de estudo e prática no curso Front-End Engineer da Codecademy, no entanto, foram implementadas funcionalidades que não estavam listadas no projeto.",
      services: ["UI Design", "Front-end"],
      tools: ["React", "HTML", "SASS", "Javascript"],
      live: "https://felipegomesoo.github.io/react-jamming/",
      githubRepo: "https://github.com/FelipeGomesOo/react-jamming",
    },
    sections: [
      /* {
                video: {
                    width: '560',
                    height: '315',
                    src: 'https://www.youtube.com/embed/9NTWdvuK-Rw?si=II-6Icg7mmOaFbfp',
                    title: 'Jamming - Web app'
                }   
            }, */
      {
        title: "Fluxo de dados",
        thumbs: [
          {
            src: "flow-pt-hor.svg",
            size: 12,
            w: "1326",
            h: "731",
          },
        ],
      },
      {
        title: "Telas",
        thumbs: [
          {
            src: "01.jpg",
            size: 12,
            w: "1326",
            h: "731",
          },
          {
            src: "02.jpg",
            size: 12,
            w: "1326",
            h: "731",
          },
          {
            src: "03.jpg",
            size: 12,
            w: "1326",
            h: "731",
          },
          {
            src: "04.jpg",
            size: 12,
            w: "1326",
            h: "731",
          },
          {
            src: "05.jpg",
            size: 12,
            w: "1326",
            h: "731",
          },
        ],
      },
    ],
  },
  {
    name: "find-my-hat",
    visible: true,
    cathegory: "code",
    client: {
      name: "Find my Hat",
      site: "https://felipegomesoo.github.io/find-my-hat/",
      sector: "Video Game",
    },
    info: {
      tagline: "Video Game",
      shortDescription: "Um jogo no estilo 16 bits criado com React",
      description:
        '"Find My Hat" é um jogo onde o objetivo é localizar um chapéu sem cair em armadilhas. O cenário é gerado automaticamente e aleatoriamente a cada início, proporcionando uma experiência única a cada jogada. Inicialmente concebido como parte de um estudo de javascript e node.js do curso Front-End Developer da Codecademy, o projeto evoluiu e foi implementado em React de modo que pudesse ser jogado diretamente no navegador.',
      services: ["UI Design", "Front-end"],
      tools: ["React", "HTML", "SASS", "Javascript"],
      live: "https://felipegomesoo.github.io/find-my-hat/",
      githubRepo: "https://github.com/FelipeGomesOo/find-my-hat",
    },
    sections: [
      /* {
                title: 'Uma visão geral do jogo',
                subtitle: 'Neste vídeo você vai saber um pouco mais sobre como o jogo funciona e como foi construído.',
                video: {
                         
                    width: '560',
                    height: '315',
                    src: 'https://www.youtube.com/embed/9NTWdvuK-Rw?si=II-6Icg7mmOaFbfp',
                    title: 'Find My Hat'
                }   
            }, */
      {
        title: "Telas",
        thumbs: [
          {
            src: "01.gif",
            alt: "Visão geral do jogo",
            size: 12,
            w: "1326",
            h: "731",
          },
          {
            src: "02.gif",
            alt: "O cenário é gerado automaticamente e aleatoriamente a cada início de jogo",
            size: 12,
            w: "1326",
            h: "731",
          },
          {
            src: "03.jpg",
            alt: "Ocasionalmente o cenário pode criar um desenho impossível de chegar ao chapéu. Isso é algo que estou trabalhando.",
            size: 12,
            w: "1326",
            h: "731",
          },
        ],
      },
    ],
  },
  {
    name: "ficou-pequeno",
    visible: true,
    cathegory: "code",
    client: {
      name: "Ficou Pequeno",
      site: "http://www.ficoupequeno.com/",
      sector: "E-commerce",
      location: "Rio de Janeiro, RJ",
    },
    info: {
      tagline: "Web app",
      shortDescription:
        "Mobile para ecommerce preferido das mamães e papais do Brasil.",
      description:
        "O Ficou Pequeno é um marketplace de artigos de segunda mão infatil. O site já conta com mais de 20 mil usuários cadastrados e chegou a hora e fazer uma versão exclusiva para mobile.",
      services: ["UI Design", "Front-end"],
      tools: ["Photoshop", "HTML", "CSS", "Javascript"],
      direction: {
        name: "Alexandre Fischer",
        company: "Pé de Sonhos",
        url: "https://www.pedesonhos.com.br",
      },
      live: "http://www.ficoupequeno.com/",
    },
    sections: [
      {
        title: "Como fazer a girafinha caber na palma da mão?",
        subtitle:
          "Organizarmos a jornada do usuário em 13 fluxos de aproximadamente 170 telas. Desde o cadastro, carrinho de compras, busca, casdatro de produto, gestão dos vendas, troca de mensagens. Ufa.",
        type: 1,
        thumbs: [
          {
            src: "fp.jpg",
            size: 12,
            w: "1326",
            h: "995",
          },
        ],
      },
      {
        title: "Comprinha no aplicativo",
        subtitle:
          "Quero comprar um vestido para minha filha de 6 anos. Me acompanha?",
        thumbs: [
          {
            src: "01.jpg",
            alt: "Vou na sessão de produtos.",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "02.jpg",
            alt: "Roupas para meninas",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "03.jpg",
            alt: "Vestidos",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "04.jpg",
            alt: "Hummm... não sei",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "05.jpg",
            alt: "Produtos em destaque",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "06.jpg",
            alt: "Vou melhorar minha pesquisa",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "08.jpg",
            alt: "Meninas",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "09.jpg",
            alt: "6 anos",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "07.jpg",
            alt: "De preferência nunca usado",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "10.jpg",
            alt: "Nessa faixa de preços",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "11.jpg",
            alt: "Quais marcas vou escolher?",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "12.jpg",
            alt: "Pronto. Acho que é isso.",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "13.jpg",
            alt: "Esse vermelho parece ótimo.",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "14.jpg",
            alt: "Acho que encontrei!",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "14-b.jpg",
            alt: "E a lojinha parece ótima!",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "15.jpg",
            alt: "Vou colocar no carrinho.",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "16.jpg",
            alt: "Meu endereço está correto.",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "16-2.jpg",
            alt: "Tudo parece estar certinho.",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "16-3.jpg",
            alt: "Crédito!",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "17.jpg",
            alt: "Só um minutinho...",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "18.jpg",
            alt: "Obaaa!",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "19.jpg",
            alt: "Vou conferir minhas compras",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "20.jpg",
            alt: "Preciso combinar a retirada",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "21.jpg",
            alt: "Combinar retirada",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "22.jpg",
            alt: "Espero que ela responda logo!",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "23.jpg",
            alt: "Rapidinho!",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "24.jpg",
            alt: "Essa lojinha merece um elogio!",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "25.jpg",
            alt: "Gente, eu amei!",
            size: 3,
            w: "594",
            h: "967",
          },
        ],
      },
    ],
  },
  {
    name: "oro",
    visible: true,
    cathegory: "code",
    client: {
      name: "Oro Restaurante",
      site: "http://ororestaurante.com.br/",
      sector: "Gastronomia",
      location: "Rio de Janeiro, RJ",
    },
    info: {
      tagline: "Site institucional",
      shortDescription: "Cozinha brasileira de vanguarda, feita no fogo.",
      description:
        "Fundado em 2010 pelo chef Felipe Bronze, o Oro segue uma trajetória marcada por muitos prêmios, inovações e revoluções na cena gastronômica brasileira.",
      services: ["UI Design", "Front-end"],
      tools: ["Photoshop", "Illustrator", "Wordpress"],
      direction: {
        name: "Alexandre Fischer",
        company: "Pé de Sonhos",
        url: "https://www.pedesonhos.com.br",
      },
      live: "http://ororestaurante.com.br/",
    },
    sections: [
      {
        title: "Telas",
        thumbs: [
          {
            src: "01.jpg",
            size: 12,
            w: "1326",
            h: "3556",
          },
          {
            src: "02.jpg",
            size: 12,
            w: "1326",
            h: "731",
          },
        ],
      },
    ],
  },
  {
    name: "ecobras",
    visible: true,
    cathegory: "code",
    client: {
      name: "Ecobras",
      site: "http://www.ecobras.com.br/",
      sector: "Alimentício",
      location: "Rio de Janeiro, RJ",
    },
    info: {
      tagline: "Site institucional",
      shortDescription:
        "Produtos naturais à base de soja, sem glútem, açúcar ou lactose.",
      description:
        "A Ecobras é uma fábrica que processa soja orgânica e transforma em alimentos deliciosos e saudáveis. Minha missão era repaginar o antigo site para que fosse responsivo e otimizado para mecanismos de busca.",
      services: ["UI Design", "Front-end"],
      tools: ["Photoshop", "Illustrator", "Wordpress"],
    },
    sections: [
      {
        title: "Telas",
        thumbs: [
          {
            src: "01.jpg",
            size: 12,
            w: "1326",
            h: "2896",
          },
          {
            src: "02.jpg",
            size: 12,
            w: "1326",
            h: "1390",
          },
          {
            src: "03.jpg",
            size: 12,
            w: "1326",
            h: "1478",
          },
        ],
      },
    ],
  },
  {
    name: "4a",
    visible: true,
    cathegory: "design",
    client: {
      name: "4a",
      site: "http://www.4a.pt/",
      sector: "Imobiliário",
      location: "Portugal",
    },
    info: {
      tagline: "Branding",
      shortDescription:
        "Branding para construir incríveis experiências imobiliárias em Portugal",
      description:
        "A 4A desenvolve empreendimentos imobiliários de alta qualidade em Portugal e precisou de uma marca para conquistar o público em Vila Nova de Gaia no Porto.",
      services: ["Branding", "UI Design", "Front-end", "Papelaria"],
      tools: ["Photoshop", "HTML", "CSS", "Javascript"],
    },
    sections: [
      {
        title: "Propostas",
        thumbs: [
          {
            src: "opt-01.jpg",
            alt: "Option 01",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "opt-02.jpg",
            alt: "Option 02",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "opt-03.jpg",
            alt: "Option 03",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "01.jpg",
            size: 12,
            w: "1326",
            h: "498",
          },
        ],
      },
      {
        title: "Aplicações",
        thumbs: [
          {
            src: "02.jpg",
            size: 12,
            w: "1326",
            h: "995",
          },
          {
            src: "03.jpg",
            size: 12,
            w: "1326",
            h: "881",
          },
          {
            src: "04.jpg",
            size: 12,
            w: "1326",
            h: "930",
          },
          {
            src: "05.jpg",
            size: 12,
            w: "1326",
            h: "995",
          },
          {
            src: "06.jpg",
            size: 4,
            w: "2000",
            h: "2500",
          },
          {
            src: "07.jpg",
            size: 4,
            w: "1326",
            h: "1659",
          },
          {
            src: "08.jpg",
            size: 4,
            w: "1326",
            h: "1659",
          },
          {
            src: "09.jpg",
            size: 12,
            w: "1440",
            h: "5762",
          },
        ],
      },
    ],
  },
  {
    name: "sima-contabil",
    visible: true,
    cathegory: "code",
    client: {
      name: "Sima Contábil",
      site: "https://www.simacontabil.com.br/",
      sector: "Contabilidade",
      location: "Rio de Janeiro, RJ",
    },
    info: {
      tagline: "Site institucional",
      shortDescription: "Site para um escritório de contabilidade no Rio",
      description:
        "A Sima é um escritório de contabilidade no Rio de Janeiro e oferece soluções completas em consultoria e terceirização de atividades contábeis, financeiras, fiscais e trabalhistas. Eles precisavam de um novo site para comunicar seu portfolio de serviços.",
      services: ["Conteúdo", "UI Design", "Front-end"],
      tools: ["Photoshop", "HTML", "CSS", "Javascript", "PHP"],
      live: "https://www.simacontabil.com.br/",
    },
    sections: [
      {
        title: "Telas",
        thumbs: [
          {
            src: "01.jpg",
            size: 12,
            w: "1440",
            h: "5007",
          },
          {
            src: "02.jpg",
            size: 12,
            w: "1440",
            h: "5007",
          },
          {
            src: "03.jpg",
            size: 12,
            w: "1440",
            h: "2847",
          },
        ],
      },
    ],
  },
  {
    name: "bpa",
    visible: true,
    cathegory: "design",
    client: {
      name: "Boureau Przewodowski Advocacia",
      site: "https://bpadvocacia.adv.br/",
      sector: "Jurídico",
      location: "Rio de Janeiro, RJ",
    },
    info: {
      tagline: "Redesign",
      shortDescription:
        "Repensar a marca de um escritório com mais de 40 anos de história.",
      description:
        "Escritório novo, marca nova. A BPA que presta consultoria jurídica nacional e internacional passou por um reposicionamento e foi necessário pensar uma nova identidade visual.",
      services: [
        "Branding",
        "Papelaria",
        "Sinalização",
        "UI Design",
        "Front-end",
      ],
      tools: ["Photoshop", "Illustrator", "HTML", "CSS", "Javascript"],
    },
    sections: [
      {
        title: "Marca Anterior",
        subtitle:
          "Havia uma percepção de que os tipos caligráficos não refletiam os valores do escritório. Além disso, é importante esclarecer que, após o início do projeto, houve uma mudança na composição do quadro societário, resultando na transição de 'Fernandes & Przewodowski Advocacia' para 'Bureau Przewodowski Advocacia'",
        type: 1,
        thumbs: [
          {
            src: "marca-antiga.jpg",
            alt: "Marca anterior ao reposicionamento",
            size: 12,
            w: "648",
            h: "486",
          },
        ],
      },
      {
        title: "Propostas",
        thumbs: [
          {
            src: "opt-01.jpg",
            alt: "Opção 01",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "opt-02.jpg",
            alt: "Opção 02",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "opt-03.jpg",
            alt: "Opção 03",
            size: 4,
            w: "648",
            h: "486",
          },
        ],
      },
      {
        title: "Construção da marca",
        thumbs: [
          {
            src: "construcao-01.jpg",
            alt: "Minimalismo",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "construcao-02.jpg",
            alt: "Monograma",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "construcao-03.jpg",
            alt: "Vermelho Pontual",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "01.jpg",
            size: 12,
            w: "1326",
            h: "486",
          },
        ],
      },
      {
        title: "Aplicações",
        thumbs: [
          {
            src: "02.jpg",
            size: 12,
            w: "1326",
            h: "995",
          },
          {
            src: "03.jpg",
            size: 6,
            w: "648",
            h: "486",
          },
          {
            src: "04.jpg",
            size: 6,
            w: "648",
            h: "486",
          },
          {
            src: "05.jpg",
            size: 12,
            w: "1326",
            h: "995",
          },
          {
            src: "06.jpg",
            size: 6,
            w: "648",
            h: "486",
          },
          {
            src: "07.jpg",
            size: 6,
            w: "648",
            h: "486",
          },
          {
            src: "10.jpg",
            size: 12,
            w: "1326",
            h: "995",
          },
          {
            src: "08.jpg",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "09.jpg",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "12.jpg",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "11.jpg",
            size: 12,
            w: "1326",
            h: "995",
          },
          {
            src: "13.jpg",
            size: 12,
            w: "1326",
            h: "1560",
          },
        ],
      },
    ],
  },
  {
    name: "v2v",
    visible: true,
    cathegory: "design",
    client: {
      name: "V2V",
      site: "https://www.v2v.net/",
      sector: "Voluntariado",
      location: "Rio de Janeiro, RJ",
    },
    info: {
      tagline: "Site institucional",
      shortDescription: "Plataformas de mobilização social para empresas.",
      description:
        "V2V - Volunteer to Volunteer - oferece portais corporativos de voluntariado com a missão de reunir empresas socialmente responsáveis.",
      services: ["UI Design", "Front-end"],
      tools: ["Photoshop", "HTML", "CSS", "Javascript"],
      direction: {
        name: "Alexandre Fischer",
        company: "Pé de Sonhos",
        url: "https://www.pedesonhos.com.br",
      },
    },
    sections: [
      {
        title: "Telas",
        thumbs: [
          {
            src: "01.jpg",
            size: 12,
            w: "1326",
            h: "1885",
          },
          {
            src: "02.jpg",
            size: 12,
            w: "1326",
            h: "1486",
          },
          {
            src: "03.jpg",
            size: 12,
            w: "1326",
            h: "1205",
          },
          {
            src: "04.jpg",
            size: 12,
            w: "1326",
            h: "1532",
          },
        ],
      },
    ],
  },
  {
    name: "anamel-castro",
    visible: true,
    cathegory: "design",
    client: {
      name: "Anamel Castro",
      site: "http://www.anamelcastro.com.br/",
      sector: "Fotografia",
      location: "Rio de Janeiro, RJ",
    },
    info: {
      tagline: "Identidade Visual",
      shortDescription: "Branding sob medida para uma fotógrafa de família.",
      description:
        "Ana é especialista em fotografia de família: ensaios, nascimento, festas e batizados. Depois de alinharmos caminhos visuais foram apresentadas 3 propostas para sua identidade visual.",
      services: ["Branding", "Papelaria"],
      tools: ["Photoshop", "HTML", "CSS", "Javascript"],
    },
    sections: [
      {
        title: "Propostas",
        thumbs: [
          {
            src: "opt-01.jpg",
            alt: "Opção 01 - Caligráfica com simbolo do balão",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "opt-02.jpg",
            alt: "Opção 02 - Alusão a fotografia dos pés",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "opt-03.jpg",
            alt: "Opção 03 - Símbolo do frame + abelha",
            size: 4,
            w: "648",
            h: "486",
          },
        ],
      },
      {
        title: "Construção da marca",
        thumbs: [
          {
            src: "construcao-01.jpg",
            alt: "Quem nunca viu uma dessas no instagram?",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "construcao-02.jpg",
            alt: "Representação à lápis",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "construcao-03.jpg",
            alt: 'Cores "abelhudas" Amarelo + Marrom',
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "01.jpg",
            alt: "Versão final horizontal",
            size: 12,
            w: "1326",
            h: "648",
          },
        ],
      },
      {
        title: "Aplicações",
        thumbs: [
          {
            src: "06.jpg",
            size: 6,
            w: "1326",
            h: "648",
          },
          {
            src: "05.jpg",
            size: 6,
            w: "1326",
            h: "648",
          },
          {
            src: "04.jpg",
            size: 6,
            w: "1326",
            h: "648",
          },
          {
            src: "07.jpg",
            size: 6,
            w: "1326",
            h: "648",
          },
          {
            src: "03.jpg",
            size: 12,
            w: "1326",
            h: "648",
          },
        ],
      },
    ],
  },
  {
    name: "amoras",
    visible: true,
    cathegory: "design",
    client: {
      name: "Pousada das Amoras",
      site: "http://www.amorasbuzios.com.br/",
      sector: "Hoteleiro",
      location: "Rio de Janeiro, RJ",
    },
    info: {
      tagline: "Site institucional",
      shortDescription:
        "Site para a pousada mais charmosa e tranquila de Búzios.",
      description:
        "À 250m da praia, a pousada conta com 11 suítes decoradas com bom gosto e simplicidade, bem à moda buziana. Portanto o site precisava ser simples e refletir todo o conforto e sossego das Amoras.",
      services: ["UI Design", "Front-end"],
      tools: ["Photoshop", "HTML", "CSS", "Javascript"],
      direction: {
        name: "Alexandre Fischer",
        company: "Pé de Sonhos",
        url: "https://www.pedesonhos.com.br",
      },
    },
    sections: [
      {
        title: "Telas",
        thumbs: [
          {
            src: "02.jpg",
            size: 12,
            w: "1400",
            h: "2908",
          },
          {
            src: "03.jpg",
            size: 12,
            w: "1400",
            h: "1848",
          },
          {
            src: "04.jpg",
            size: 12,
            w: "1400",
            h: "2520",
          },
          {
            src: "05.jpg",
            size: 12,
            w: "1400",
            h: "1260",
          },
          {
            src: "06.jpg",
            size: 12,
            w: "1400",
            h: "2743",
          },
          {
            src: "07.jpg",
            size: 12,
            w: "1400",
            h: "1309",
          },
        ],
      },
    ],
  },
];

export default projectsData;
