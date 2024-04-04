import { Project } from "@/lib/definitions";

const projectsData: Project[] = [
  {
    name: "primavera-dos-paes",
    visible: false,
    cathegory: "design",
    client: {
      name: "Primavera dos Pães",
      site: "http://www.primaveradospaes.com.br/",
      sector: "Padaria",
      location: "Rio de Janeiro, RJ",
    },
    info: {
      tagline: "Branding",
      shortDescription: "Marca para a Primavera dos Pães",
      description:
        "A Primavera dos Pães é uma padaria artesanal que produz pães de fermentação natural, brioches e biscoitos com ingredientes orgânicos e nacionais",
      services: ["UI Design", "Front-end"],
      tools: ["Branding", "Papelaria", "Sinalização"],
    },
    sections: [
      {
        title: "Propostas",
        thumbs: [
          {
            src: "opt_01.jpg",
            alt: "Opção 01 - Caligráfica com simbolo do balão",
            size: 4,
          },
          {
            src: "opt_02.jpg",
            alt: "Opção 02 - Alusão a fotografia dos pés",
            size: 4,
          },
          {
            src: "opt_03.jpg",
            alt: "Opção 03 - Símbolo do frame + abelha",
            size: 4,
          },
        ],
      },
      {
        title: "Construção da marca",
        thumbs: [
          {
            src: "construcao_01.jpg",
            alt: "Quem nunca viu uma dessas no instagram?",
            size: 4,
          },
          {
            src: "construcao_02.jpg",
            alt: "Representação à lápis",
            size: 4,
          },
          {
            src: "construcao_03.jpg",
            alt: 'Cores "abelhudas" Amarelo + Marrom',
            size: 4,
          },
          {
            src: "01.jpg",
            alt: "Versão final horizontal",
            size: 12,
          },
        ],
      },
      {
        title: "Aplicações",
        thumbs: [
          {
            src: "06.jpg",
            size: 6,
          },
          {
            src: "05.jpg",
            size: 6,
          },
          {
            src: "04.jpg",
            size: 6,
          },
          {
            src: "07.jpg",
            size: 6,
          },
          {
            src: "03.jpg",
            size: 12,
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
      sector: "Music",
    },
    info: {
      tagline: "Web app",
      shortDescription: "A React app to manage Spotify music playlists.",
      description:
        "Jamming allows users to search the Spotify library, create a personalized playlist, and save it to their Spotify account. Originally developed for study and practice in the Codecademy Front-End Engineer course, additional functionalities were implemented beyond the project specifications.",
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
        title: "Data flow",
        thumbs: [
          {
            src: "flow-en-hor.svg",
            size: 12,
            w: "1326",
            h: "731",
          },
        ],
      },
      {
        title: "Screens",
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
      shortDescription: "A 16-bit style game created with React.",
      description:
        '"Find My Hat" is a game where the objective is to locate a hat without falling into traps. The scenario is generated automatically and randomly at each start, providing a unique experience with every playthrough. Originally conceived as part of a JavaScript and Node.js study in the Codecademy Front-End Developer course, the project evolved and was implemented in React so that it could be played directly in the browser.',
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
        title: "Screens",
        thumbs: [
          {
            src: "01.gif",
            alt: "Game overview",
            size: 12,
            w: "1326",
            h: "731",
          },
          {
            src: "02.gif",
            alt: "The scenario is generated automatically and randomly at each game start.",
            size: 12,
            w: "1326",
            h: "731",
          },
          {
            src: "03.jpg",
            alt: "Occasionally, the scenario may create an impossible path to reach the hat. This is something I am working on.",
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
      location: "Rio de Janeiro, Brazil",
    },
    info: {
      tagline: "Web app",
      shortDescription:
        "Mobile web app for Brazil's favorite e-commerce for moms and dads.",
      description:
        "Parents are well aware that children grow out of their clothes very quickly, and even products in great condition become unused. 'Ficou Pequeno' addresses this issue. It's a marketplace for second-hand children's items. With over 20,000 registered users on the desktop site, it was time to introduce a mobile version.",
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
        title: "So how do we fit a giraffe in the palm of our hand?",
        subtitle:
          "We organized the user's journey on 13 flows of approximately 170 screens. We are talking registration, shopping cart, search, product registration, sales management, messaging. Phew!",
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
        title: "Let's go shopping",
        subtitle: "Join me as I browse for a dress for my six-year-old.",
        thumbs: [
          {
            src: "01.jpg",
            alt: "Ok. Product session!",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "02.jpg",
            alt: "Girls apparel",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "03.jpg",
            alt: "Dresses",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "04.jpg",
            alt: "That's not quite it",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "05.jpg",
            alt: "Featured products",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "06.jpg",
            alt: "Let me improve this search ",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "08.jpg",
            alt: "Girls",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "09.jpg",
            alt: "6 years",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "07.jpg",
            alt: "Preferably never used",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "10.jpg",
            alt: "In this price range ",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "11.jpg",
            alt: "Which brands should I choose? ",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "12.jpg",
            alt: "Ok. I think that's it.",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "13.jpg",
            alt: "The red one looks great too. ",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "14.jpg",
            alt: "Yep. Think I found it!",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "14-b.jpg",
            alt: "And the store looks great!",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "15.jpg",
            alt: "I'll put it in the cart.",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "16.jpg",
            alt: "My address is correct.",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "16-2.jpg",
            alt: "Everything seems to be right.",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "16-3.jpg",
            alt: "Credit, please!",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "17.jpg",
            alt: "One second...",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "18.jpg",
            alt: "Done!",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "19.jpg",
            alt: "Let me check my purchases",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "20.jpg",
            alt: "I need to schedule the pickup",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "21.jpg",
            alt: "Pickup scheduled",
            size: 4,
            w: "594",
            h: "967",
          },
          {
            src: "22.jpg",
            alt: "Looking forward to her response!",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "23.jpg",
            alt: "That was fast!",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "24.jpg",
            alt: "I'm so impressed with this seller.",
            size: 3,
            w: "594",
            h: "967",
          },
          {
            src: "25.jpg",
            alt: "I'll leave her a positive review.",
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
      name: "Oro Restaurant",
      site: "http://ororestaurante.com.br/",
      sector: "Gastronomy",
      location: "Rio de Janeiro, Brazil",
    },
    info: {
      tagline: "Corporate website",
      shortDescription: "Cutting-edge Brazilian cuisine, on fire.",
      description:
        "Chef Felipe Bronze founded Oro in 2010, and since then, the restaurant has been on a remarkable journey, garnering numerous awards, pioneering culinary innovations, and reshaping the Brazilian culinary scene.",
      services: ["UI Design", "Front-end"],
      tools: ["Photoshop", "Illustrator", "Wordpress"],
      direction: {
        name: "Alexandre Fischer",
        company: "Pé de Sonhos",
        url: "https://www.pedesonhos.com.br",
      },
    },
    sections: [
      {
        title: "Screens",
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
      sector: "Food industry",
      location: "Rio de Janeiro, Brazil",
    },
    info: {
      tagline: "Corporate website",
      shortDescription:
        "Natural soy-based products, free of gluten, sugar, or lactose.",
      description:
        "Ecobras turns organic soy into delicious and healthy foods. My mission was to revamp the old website to make it responsive and search engine-optimized.",
      services: ["UI Design", "Front-end"],
      tools: ["Photoshop", "Illustrator", "Wordpress"],
    },
    sections: [
      {
        title: "Screens",
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
      sector: "Real Estate",
      location: "Portugal",
    },
    info: {
      tagline: "Branding",
      shortDescription:
        "Branding for extraordinary real estate experiences in Portugal.",
      description:
        "4A specializes in delivering high-quality real estate developments in Portugal, with a focus on capturing the attention of Vila Nova de Gaia public in Porto.",
      services: ["Branding", "UI Design", "Front-end", "Stationary"],
      tools: ["Photoshop", "HTML", "CSS", "Javascript"],
    },
    sections: [
      {
        title: "Pitches",
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
        title: "Brand implementations",
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
      sector: "Accounting",
      location: "Rio de Janeiro, Brazil",
    },
    info: {
      tagline: "Corporate website",
      shortDescription: "Website for an accouting firm in Rio de Janeiro.",
      description:
        "Sima offers comprehensive solutions in consultancy and outsourcing of accounting, financial, tax, and labor activities. They needed a new website to showcase their portfolio of services.",
      services: ["Content", "UI Design", "Front-end"],
      tools: ["Photoshop", "HTML", "CSS", "Javascript", "PHP"],
    },
    sections: [
      {
        title: "Screens",
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
      sector: "Legal",
      location: "Rio de Janeiro, Brazil",
    },
    info: {
      tagline: "Rebranding",
      shortDescription:
        "Rebranding over 40 years of history in legal advisory.",
      description:
        "Fresh office, fresh brand. BPA, which provides national and international legal consultancy, underwent a repositioning, requiring the development of a new visual identity.",
      services: ["Branding", "Stationary", "Signage", "UI Design", "Front-end"],
      tools: ["Photoshop", "Illustrator", "HTML", "CSS", "Javascript"],
    },
    sections: [
      {
        title: "Previous brand",
        subtitle:
          "There was a sense that the calligraphic fonts didn't represent the values of the office. It's important to clarify that, in addition to the new positioning, there was a change in the ownership structure after the project began. As a result, 'Fernandes & Przewodowski Advocacia' transitioned to 'Bureau Przewodowski Advocacia.'",
        thumbs: [
          {
            src: "marca-antiga.jpg",
            alt: "Brand before repositioning",
            size: 12,
            w: "648",
            h: "486",
          },
        ],
      },
      {
        title: "Pitches",
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
        ],
      },
      {
        title: "Brand development",
        thumbs: [
          {
            src: "construcao-01.jpg",
            alt: "Minimalism",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "construcao-02.jpg",
            alt: "Monogram",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "construcao-03.jpg",
            alt: "Subtle Red",
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
        title: "Brand implementations",
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
      sector: "Volunteering",
      location: "Rio de Janeiro, Brazil",
    },
    info: {
      tagline: "Corporate website",
      shortDescription: "Social mobilization platforms for businesses.",
      description:
        "V2V - Volunteer to Volunteer - provides corporate volunteering portals with the mission of bringing together socially responsible companies.",
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
        title: "Screens",
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
      sector: "Photography",
      location: "Rio de Janeiro, Brazil",
    },
    info: {
      tagline: "Visual identity",
      shortDescription: "Bespoke brand for a family photographer.",
      description:
        "Ana specializes in family photography, including portrait sessions, births, celebrations, and baptisms. After aligning visual directions, three proposals were presented for her visual identity.",
      services: ["Branding", "Stationary"],
      tools: ["Photoshop", "HTML", "CSS", "Javascript"],
    },
    sections: [
      {
        title: "Pitches",
        thumbs: [
          {
            src: "opt-01.jpg",
            alt: "Option 01 - Calligraphic with a balloon symbol",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "opt-02.jpg",
            alt: "Option 02 - Allusion to foot photography",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "opt-03.jpg",
            alt: "Option 03 - Frame symbol + bee",
            size: 4,
            w: "648",
            h: "486",
          },
        ],
      },
      {
        title: "Brand development",
        thumbs: [
          {
            src: "construcao-01.jpg",
            alt: "Who has never seen one of these on Instagram?",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "construcao-02.jpg",
            alt: "Pencil representation",
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "construcao-03.jpg",
            alt: '"Bee" Colors: Yellow + Brown ',
            size: 4,
            w: "648",
            h: "486",
          },
          {
            src: "01.jpg",
            alt: "Horizontal Final Version",
            size: 12,
            w: "1326",
            h: "648",
          },
        ],
      },
      {
        title: "Brand implementations",
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
      sector: "Hospitality ",
      location: "Rio de Janeiro, Brazil",
    },
    info: {
      tagline: "Corporate website",
      shortDescription:
        "Website for the most charming and peaceful inn in Búzios.",
      description:
        "Located just 250 meters from the beach, the inn offers 11 tastefully decorated suites, in true Búzios style. As such, the website needed to be simple and reflect all the comfort and tranquility of Amoras.",
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
        title: "Screens",
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
