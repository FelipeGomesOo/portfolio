import imgs from '@/lib/images/images.js';

const projectsData = [
    {  
        name: 'primavera-dos-paes',
        visible: false,
        client: {
            name: 'Primavera dos Pães',
            site: 'http://www.primaveradospaes.com.br/',
            sector: 'Padaria',
            location: 'Rio de Janeiro, RJ'
        },
        info: {
            tagline: 'Branding',
            shortDescription: 'Marca para a Primavera dos Pães',
            description: 'A Primavera dos Pães é uma padaria artesanal que produz pães de fermentação natural, brioches e biscoitos com ingredientes orgânicos e nacionais',
            services:['UI Design','Front-end'],
            tools:['Branding','Papelaria','Sinalização'],
            thumb: imgs.thumb_primavera_dos_paes,
            mainImage: imgs.main_primavera_dos_paes            
        },
        sections: [
            {
                title: 'Propostas',             
                thumbs: 
                [
                    {
                        src: imgs.gallery_ana_opt_01, 
                        alt: 'Opção 01 - Caligráfica com simbolo do balão',
                        size: 4                     
                    }, 
                    {
                        src: imgs.gallery_ana_opt_02,
                        alt: 'Opção 02 - Alusão a fotografia dos pés',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ana_opt_03,
                        alt: 'Opção 03 - Símbolo do frame + abelha',
                        size: 4
                    } 
                ]
            },
            {
                title: 'Construção da marca',             
                thumbs: 
                [
                    {
                        src: imgs.gallery_ana_construcao_01, 
                        alt: 'Quem nunca viu uma dessas no instagram?',
                        size: 4                     
                    }, 
                    {
                        src: imgs.gallery_ana_construcao_02,
                        alt: 'Representação à lápis',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ana_construcao_03,
                        alt: 'Cores "abelhudas" Amarelo + Marrom',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ana_01,
                        alt: 'Versão final horizontal',
                        size: 12
                    } 
                ]
            },
            {
                title: 'Aplicações',             
                thumbs: 
                [      
                    
                    {
                        src: imgs.gallery_ana_06,                        
                        size: 6
                    },   
                    {
                        src: imgs.gallery_ana_05,                        
                        size: 6
                    },
                    {
                        src: imgs.gallery_ana_04,                        
                        size: 6
                    }, 
                    {
                        src: imgs.gallery_ana_07,                        
                        size: 6
                    },
                    {
                        src: imgs.gallery_ana_03,                        
                        size: 12
                    }
                ]
            }
        ]
    }, 
    {  
        name: 'jamming',
        visible: true,
        client: {
            name: 'Jamming',
            site: 'http://www.felipe-gomes.com/jamming/',
            sector: 'Music'
        },
        info: {
            tagline: 'Web app',
            shortDescription: 'A React app to manage Spotify music playlists.',
            description: 'Jamming allows users to search the Spotify library, create a personalized playlist, and save it to their Spotify account. Originally developed for study and practice in the Codecademy Front-End Engineer course, additional functionalities were implemented beyond the project specifications.',
            services:['UI Design','Front-end'],
            tools: ['React', 'HTML', 'SASS', 'Javascript'], 
            thumb: imgs.thumb_jamming,
            mainImage: imgs.main_jamming,
            live: 'http://www.felipe-gomes.com/jamming/',
            githubRepo: 'https://github.com/FelipeGomesOo/react-jamming'
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
                title: 'Data flow',                
                thumbs: 
                [
                    {
                        src: imgs.gallery_jamming_flow_en_hor, 
                        size: 12
                    },
                      
                ]
            },
            {
                title: 'Screens',                
                thumbs: 
                [
                    
                    {
                        src: imgs.gallery_jamming_01, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_jamming_02, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_jamming_03, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_jamming_04, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_jamming_05, 
                        size: 12
                    },
                      
                ]
            }
            
        ]
    },
    {  
        name: 'findMyHat',
        visible: true,
        client: {
            name: 'Find my Hat',
            site: 'http://www.felipe-gomes.com/findMyHat/',
            sector: 'Video Game'
        },
        info: {
            tagline: 'Video Game',
            shortDescription: 'A 16-bit style game created with React.',
            description: '"Find My Hat" is a game where the objective is to locate a hat without falling into traps. The scenario is generated automatically and randomly at each start, providing a unique experience with every playthrough. Originally conceived as part of a JavaScript and Node.js study in the Codecademy Front-End Developer course, the project evolved and was implemented in React so that it could be played directly in the browser.',
            services:['UI Design','Front-end'],
            tools: ['React', 'HTML', 'SASS', 'Javascript'], 
            thumb: imgs.thumb_findMyHat,
            mainImage: imgs.main_findMyHat,
            live: 'http://www.felipe-gomes.com/findMyHat/',
            githubRepo: 'https://github.com/FelipeGomesOo/find-my-hat'        
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
                title: 'Screens',                
                thumbs: 
                [
                    {
                        src: imgs.gallery_findMyHat_01,
                        alt: "Game overview", 
                        size: 12
                    },
                    {
                        src: imgs.gallery_findMyHat_02,
                        alt: "The scenario is generated automatically and randomly at each game start.", 
                        size: 12
                    },
                    {
                        src: imgs.gallery_findMyHat_03,
                        alt: "Occasionally, the scenario may create an impossible path to reach the hat. This is something I am working on.", 
                        size: 12
                    } 
                ]
            }
        ]
    },
    {  
        name: 'ficou-pequeno',
        visible: true, 
        client: {
            name: 'Ficou Pequeno',
            site: 'http://www.ficoupequeno.com/',
            sector: 'E-commerce',
            location: 'Rio de Janeiro, Brazil'
        },
        info: {
            tagline: 'App',
            shortDescription: "Android application for Brazil's favorite e-commerce platform for moms and dads.",
            description: "Parents are well aware that children grow out of their clothes very quickly, and even products in great condition become unused. 'Ficou Pequeno' addresses this issue. It's a marketplace for second-hand children's items. With over 20,000 registered users on the desktop site, it was time to introduce a mobile application.",
            services:['UI Design','Front-end'],
            tools: ['Photoshop', 'HTML', 'CSS', 'Javascript'], 
            thumb: imgs.thumb_ficou_pequeno_mobile,
            mainImage: imgs.main_ficou_pequeno_mobile,            
            direction: {
                name: 'Alexandre Fischer',
                company: 'Pé de Sonhos',
                url: 'https://www.pedesonhos.com.br' 
            }
        },
        sections: [
            {
                title: 'So how do we fit a giraffe in the palm of our hand?',
                subtitle: "We organized the user's journey on 13 flows of approximately 170 screens. We are talking registration, shopping cart, search, product registration, sales management, messaging. Phew!",
                thumbs: 
                [
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_fp,
                        size: 12                        
                    }
                ]
            },
            {
                title: "Let's go shopping",
                subtitle: 'Join me as I browse for a dress for my six-year-old.',
                thumbs: 
                [
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_01,
                        alt: "Ok. Product session!",
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_02,
                        alt: 'Girls apparel',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_03,
                        alt: 'Dresses',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_04,
                        alt: "That's not quite it",
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_05,
                        alt: 'Featured products',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_06,
                        alt: "Let me improve this search ",
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_08,
                        alt: 'Girls',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_09,
                        alt: '6 years',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_07,
                        alt: 'Preferably never used',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_10,
                        alt: 'In this price range ',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_11,
                        alt: 'Which brands should I choose? ',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_12,
                        alt: "Ok. I think that's it.",
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_13,
                        alt: 'The red one looks great too. ',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_14,
                        alt: 'Yep. Think I found it!',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_14_b,
                        alt: 'And the store looks great!',
                        size: 4
                    }, 
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_15,
                        alt:  "I'll put it in the cart.",
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_16,
                        alt:  'My address is correct.',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_16_2,
                        alt:  'Everything seems to be right.',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_16_3,
                        alt:  'Credit, please!',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_17,
                        alt:  'One second...',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_18,
                        alt:  'Done!',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_19,
                        alt:  'Let me check my purchases',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_20,
                        alt:  'I need to schedule the pickup',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_21,
                        alt:  'Pickup scheduled',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_22,
                        alt:  'Looking forward to her response!',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_23,
                        alt:  'That was fast!',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_24,
                        alt:  "I'm so impressed with this seller.",
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_25,
                        alt:  "I'll leave her a positive review.",
                        size: 3
                    }
                ]
            } 
        ]
    }, 
    {
        name: 'oro',
        visible: true, 
        client: {
            name: 'Oro Restaurant',
            site: 'http://ororestaurante.com.br/',
            sector: 'Gastronomy',
            location: 'Rio de Janeiro, Brazil'
        },
        info: {
            tagline: 'Corporate website',
            shortDescription: 'Cutting-edge Brazilian cuisine, on fire.',
            description: 'Chef Felipe Bronze founded Oro in 2010, and since then, the restaurant has been on a remarkable journey, garnering numerous awards, pioneering culinary innovations, and reshaping the Brazilian culinary scene.',    
            services:['UI Design','Front-end'],
            tools: ['Photoshop', 'Illustrator', 'Wordpress'], 
            thumb: imgs.thumb_oro,
            mainImage: imgs.main_oro,            
            direction: {
                name: 'Alexandre Fischer',
                company: 'Pé de Sonhos',
                url: 'https://www.pedesonhos.com.br' 
            }
        },
        sections: [
            {
                title: 'Screens',                
                thumbs: 
                [
                    {
                        src: imgs.gallery_oro_01,
                        size: 12
                         
                    },
                    {
                        src: imgs.gallery_oro_02,
                        size: 12 
                         
                    }
                ]
            }
        ]
    },
    {
        name: 'ecobras',
        visible: true, 
        client: {
            name: 'Ecobras',
            site: 'http://www.ecobras.com.br/',
            sector: 'Food industry',
            location: 'Rio de Janeiro, Brazil'
        },
        info: {
            tagline: 'Corporate website',
            shortDescription: 'Natural soy-based products, free of gluten, sugar, or lactose.',
            description: 'Ecobras turns organic soy into delicious and healthy foods. My mission was to revamp the old website to make it responsive and search engine-optimized.',
            services:['UI Design','Front-end'],
            tools: ['Photoshop', 'Illustrator', 'Wordpress'], 
            thumb: imgs.thumb_ecobras,
            mainImage: imgs.main_ecobras,            
        },
        sections: [
            {
                title: 'Screens',                
                thumbs: 
                [
                    {
                        src: imgs.gallery_ecobras_01,
                        size: 12                         
                    },
                    {
                        src: imgs.gallery_ecobras_02,
                        size: 12                         
                    },
                    {
                        src: imgs.gallery_ecobras_03,
                        size: 12                         
                    }
                ]
            }
        ]
    },
    {
        name: '4a',
        visible: true, 
        client: {
            name: '4a',
            site: 'http://www.4a.pt/',
            sector: 'Real Estate',
            location: 'Portugal'
        },
        info: {
            tagline: 'Branding',
            shortDescription: 'Branding for extraordinary real estate experiences in Portugal.',
            description: '4A specializes in delivering high-quality real estate developments in Portugal, with a focus on capturing the attention of Vila Nova de Gaia public in Porto.',
            services:['Branding','UI Design','Front-end','Stationary'],
            tools: ['Photoshop', 'HTML', 'CSS', 'Javascript'], 
            thumb: imgs.thumb_4a,
            mainImage: imgs.main_4a,            
        },
        sections: [
            {
                title: 'Pitches',                
                thumbs: 
                [
                    {
                        src: imgs.gallery_4a_opt_01,
                        alt: "Option 01",
                        size: 4
                         
                    },
                    {
                        src: imgs.gallery_4a_opt_02,
                        alt: "Option 02",
                        size: 4
                         
                    },
                    {
                        src: imgs.gallery_4a_opt_03,
                        alt: "Option 03",
                        size: 4
                         
                    },
                    {
                        src: imgs.gallery_4a_01, 
                        size: 12                        
                    }
                ]
            },
            {
                title: 'Brand implementations',                
                thumbs: 
                [                     
                    {
                        src: imgs.gallery_4a_02 ,
                        size: 12                         
                    },
                    {
                        src: imgs.gallery_4a_03,
                        size: 12                          
                    },
                    {
                        src: imgs.gallery_4a_04,
                        size: 12
                    },
                    {
                        src: imgs.gallery_4a_05,
                        size: 12
                    },
                    {
                        src: imgs.gallery_4a_06,
                        size: 4
                    },
                    {
                        src: imgs.gallery_4a_07,
                        size: 4
                    },
                    {
                        src: imgs.gallery_4a_08,
                        size: 4
                    },
                    {
                        src: imgs.gallery_4a_09,
                        size: 12
                    }
                ]
            }
        ]

    },
    {
        name: 'simacontabil',
        visible: true, 
        client: {
            name: 'Sima Contábil',
            site: 'https://www.simacontabil.com.br/',
            sector: 'Accounting',
            location: 'Rio de Janeiro, Brazil'
        },
        info: {
            tagline: 'Corporate website',
            shortDescription: 'Website for an accouting firm in Rio de Janeiro.',
            description: 'Sima offers comprehensive solutions in consultancy and outsourcing of accounting, financial, tax, and labor activities. They needed a new website to showcase their portfolio of services.',
            services:['Content','UI Design','Front-end'],
            tools: ['Photoshop', 'HTML', 'CSS', 'Javascript', 'PHP'], 
            thumb: imgs.thumb_simacontabil,
            mainImage: imgs.main_simacontabil,            
        },
        sections: [
            {
                title: 'Screens',                
                thumbs: 
                [
                    {
                        src: imgs.gallery_sima_01,
                        size: 12                         
                    },
                    {
                        src: imgs.gallery_sima_02,
                        size: 12                         
                    },
                    {
                        src: imgs.gallery_sima_03,
                        size: 12                        
                    } 
                ]
            }
        ] 
    },
    {
        name: 'bpa',
        visible: true, 
        client: {
            name: 'Boureau Przewodowski Advocacia',
            site: 'https://bpadvocacia.adv.br/',
            sector: 'Legal',
            location: 'Rio de Janeiro, Brazil'
        },
        info: {
            tagline: 'Rebranding',
            shortDescription: 'Rebranding over 40 years of history in legal advisory.',
            description: 'Fresh office, fresh brand. BPA, which provides national and international legal consultancy, underwent a repositioning, requiring the development of a new visual identity.',
            services:['Branding','Stationary','Signage','UI Design','Front-end'],
            tools: ['Photoshop','Illustrator', 'HTML', 'CSS', 'Javascript'], 
            thumb: imgs.thumb_bpa,
            mainImage: imgs.main_bpa,            
        },
        sections: [
            {
                title: 'Previous brand',   
                subtitle: "There was a sense that the calligraphic fonts didn't represent the values of the office. It's important to clarify that, in addition to the new positioning, there was a change in the ownership structure after the project began. As a result, 'Fernandes & Przewodowski Advocacia' transitioned to 'Bureau Przewodowski Advocacia.'",             
                thumbs: 
                [
                    {
                        src: imgs.gallery_bpa_marca_antiga,
                        alt: 'Brand before repositioning',
                        size: 12                      
                    }
                ]
            },
            {
                title: 'Pitches',                
                thumbs: 
                [
                    {
                        src: imgs.gallery_bpa_opt_01,
                        alt: "Option 01",
                        size: 4                         
                    },
                    {
                        src: imgs.gallery_bpa_opt_02,
                        alt: "Option 02",
                        size: 4                         
                    },
                    {
                        src: imgs.gallery_bpa_opt_03,
                        alt: "Option 03",
                        size: 4                         
                    } 
                ]
            },
            {
                title: 'Brand development',                
                thumbs: 
                [
                    {
                        src: imgs.gallery_bpa_construcao_01,
                        alt: "Minimalism",  
                        size: 4                       
                    },
                    {
                        src: imgs.gallery_bpa_construcao_02,
                        alt: "Monogram",
                        size: 4                         
                    },
                    {
                        src: imgs.gallery_bpa_construcao_03,
                        alt: "Subtle Red",
                        size: 4                        
                    }, 
                    {
                        src: imgs.gallery_bpa_01,
                        size: 12                        
                    }
                ]
            },
            {
                title: 'Brand implementations',                
                thumbs: 
                [
                     
                    {
                        src: imgs.gallery_bpa_02,
                        size: 12
                    },
                    {
                        src: imgs.gallery_bpa_03,
                        size: 6
                    },
                    {
                        src: imgs.gallery_bpa_04,
                        size: 6
                    },
                    {
                        src: imgs.gallery_bpa_05,
                        size: 12
                    },
                    {
                        src: imgs.gallery_bpa_06,
                        size: 6
                    },
                    {
                        src: imgs.gallery_bpa_07,
                        size: 6
                    },                    
                    {
                        src: imgs.gallery_bpa_10,
                        size: 12
                    },
                    {
                        src: imgs.gallery_bpa_08,
                        size: 4
                    },
                    {
                        src: imgs.gallery_bpa_09,
                        size: 4
                    },
                    {
                        src: imgs.gallery_bpa_12,
                        size: 4
                    },
                    {
                        src: imgs.gallery_bpa_11,
                        size: 12
                    },
                    {
                        src: imgs.gallery_bpa_13,
                        size: 12
                    }
                ]
            },
        ] 

    },
    {
        name: 'v2v',
        visible: true, 
        client: {
            name: 'V2V',
            site: 'https://www.v2v.net/',
            sector: 'Volunteering',
            location: 'Rio de Janeiro, Brazil'
        },
        info: {
            tagline: 'Corporate website',
            shortDescription: 'Social mobilization platforms for businesses.',
            description: 'V2V - Volunteer to Volunteer - provides corporate volunteering portals with the mission of bringing together socially responsible companies.',
            services:['UI Design','Front-end',],
            tools: ['Photoshop', 'HTML', 'CSS', 'Javascript'], 
            thumb: imgs.thumb_v2v,
            mainImage: imgs.main_v2v,            
            direction: {
                name: 'Alexandre Fischer',
                company: 'Pé de Sonhos',
                url: 'https://www.pedesonhos.com.br' 
            }
        },
        sections: [
            {
                title: 'Screens',             
                thumbs: 
                [
                    {
                        src: imgs.gallery_v2v_01,
                        size: 12
                    },
                    {
                        src: imgs.gallery_v2v_02,
                        size: 12
                    },
                    {
                        src: imgs.gallery_v2v_03,
                        size: 12
                    },
                    {
                        src: imgs.gallery_v2v_04,
                        size: 12
                    } 
                ]
            }
        ]
    },
    {
        name: 'anamel',
        visible: true, 
        client: {
            name: 'Anamel Castro',
            site: 'http://www.anamelcastro.com.br/',
            sector: 'Photography',
            location: 'Rio de Janeiro, Brazil'
        },
        info: {
            tagline: 'Visual identity',
            shortDescription: 'Bespoke brand for a family photographer.',
            description: 'Ana specializes in family photography, including portrait sessions, births, celebrations, and baptisms. After aligning visual directions, three proposals were presented for her visual identity.',
            services:['Branding','Stationary'],
            tools: ['Photoshop', 'HTML', 'CSS', 'Javascript'], 
            thumb: imgs.thumb_anamel,
            mainImage: imgs.main_anamel,            
        },
        sections: [
            {
                title: 'Pitches',             
                thumbs: 
                [
                    {
                        src: imgs.gallery_ana_opt_01, 
                        alt: 'Option 01 - Calligraphic with a balloon symbol',
                        size: 4                     
                    }, 
                    {
                        src: imgs.gallery_ana_opt_02,
                        alt: 'Option 02 - Allusion to foot photography',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ana_opt_03,
                        alt: 'Option 03 - Frame symbol + bee',
                        size: 4
                    } 
                ]
            },
            {
                title: 'Brand development',             
                thumbs: 
                [
                    {
                        src: imgs.gallery_ana_construcao_01, 
                        alt: 'Who has never seen one of these on Instagram?',
                        size: 4                     
                    }, 
                    {
                        src: imgs.gallery_ana_construcao_02,
                        alt: 'Pencil representation',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ana_construcao_03,
                        alt: '"Bee" Colors: Yellow + Brown ',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ana_01,
                        alt: 'Horizontal Final Version',
                        size: 12
                    } 
                ]
            },
            {
                title: 'Brand implementations',             
                thumbs: 
                [      
                    
                    {
                        src: imgs.gallery_ana_06,                        
                        size: 6
                    },   
                    {
                        src: imgs.gallery_ana_05,                        
                        size: 6
                    },
                    {
                        src: imgs.gallery_ana_04,                        
                        size: 6
                    }, 
                    {
                        src: imgs.gallery_ana_07,                        
                        size: 6
                    },
                    {
                        src: imgs.gallery_ana_03,                        
                        size: 12
                    }
                ]
            }
        ]
    },
    {
        name: 'amoras',
        visible: true, 
        client: {
            name: 'Pousada das Amoras',
            site: 'http://www.amorasbuzios.com.br/',
            sector: 'Hospitality ',
            location: 'Rio de Janeiro, Brazil'
        },
        info: {
            tagline: 'Corporate website',
            shortDescription: 'Website for the most charming and peaceful inn in Búzios.',
            description: 'Located just 250 meters from the beach, the inn offers 11 tastefully decorated suites, in true Búzios style. As such, the website needed to be simple and reflect all the comfort and tranquility of Amoras.',
            services:['UI Design','Front-end'],
            tools: ['Photoshop', 'HTML', 'CSS', 'Javascript'], 
            thumb: imgs.thumb_amoras,
            mainImage: imgs.main_amoras,            
            direction: {
                name: 'Alexandre Fischer',
                company: 'Pé de Sonhos',
                url: 'https://www.pedesonhos.com.br' 
            }
        },
        sections: [
            {
                title: 'Screens',             
                thumbs: 
                [                     
                    {
                        src: imgs.gallery_amoras_02, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_amoras_03, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_amoras_04, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_amoras_05, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_amoras_06, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_amoras_07, 
                        size: 12
                    }
                ]
            }
        ]
    }
]

export default projectsData;