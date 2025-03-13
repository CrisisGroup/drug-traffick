var config = {
    style: 'mapbox://styles/daltonwb/cm866we9900cu01qv4ao7gkt1',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    projection: 'globe',
    inset: false,
    insetOptions: {
        markerColor: '#a4343a'
    },
    insetPosition: 'bottom-left',
    use3dTerrain: false,
    auto: false,
    title: '<h1>How a new drug trafficking landscape fuels violence in Latin America</h1><video id="background-video" autoplay loop muted poster="images/poster.webp"><source src="images/aerial.webm" type="video/webm">',
    subtitle: '',
    start: 'BEGIN',
    footer: '<strong>Lead contributors</strong>: Elizabeth Dickinson<br /><strong>Visualisations</strong>: Claire Boccon-Gibod and Paul Franz <br /><br /><strong>Sources and Data</strong>: Crisis Group research, ACLED, UNCTAD / Marine Benchmark.<br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a>',
    chapters: [
        {
            id: 'INTRO', // Always use INTRO as first chapter name
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<strong><span class="violence">Violence</span> spans the complex supply chain that moves drugs from Latin America to consumer markets.</strong>' + '<br /><br />' + 'Years of law enforcement crackdowns have fractured dominant armed organisations and spawned a new generation of more flexible and dispersed groups.',
            location: {
                center: [-37.04445, 38.28202],
                zoom: 2.4,
                pitch: 25,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [
               
            ]
        },
        {
            id: 'INTRO02',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: 'Trafficking requires a network of criminal groups spread across continents. Any one supply chain from production to sale might include a dozen players, with only fluid alliances of convenience to hold them together.' + '<br /><br />' + 'Security operations in one geographic area tend to push traffickers to new theatres, as criminals hopscotch between jurisdictions to avoid policing. <strong>Competition among criminal groups for a piece of the market is fierce.</strong>',
            location: {
                center: [-37.04445, 38.28202],
                zoom: 2.4,
                pitch: 25,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'INTRO03',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: 'Yet even amid this chaotic picture, there are clear hierarchies among criminal groups largely based on the tasks they perform along the drug pipeline.' + '<br /><br />' + 'Each organisational tier sub-contracts certain functions out to increasingly smaller allies, down to the most local level.' + '<br /><br />' + 'While each drug and route differs, broadly speaking, <strong><span class="profit">profits and income</span> tend to cluster at the top, among the most powerful financiers and international traffickers, while <span class="violence">violence</span> toward communities is most widespread at the bottom, where gangs and local groups exercise coercive control.</strong>',
            location: {
                center: [-37.04445, 38.28202],
                zoom: 2.4,
                pitch: 25,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'INTRO04',
            alignment: 'center',
            hidden: false,
            title: 'Follow a journey from production to market',
            image: '',
            description: '<button class="chapter-button" id="scrollToCocaine">COCAINE</button>' + '<button class="chapter-button" id="scrollToFentanyl">FENTANYL</button>',
            location: {
                center: [-37.04445, 38.28202],
                zoom: 2.4,
                pitch: 25,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'COCAINE',
            alignment: 'full',
            hidden: false,
            title: 'The Cocaine Route',
            image: '',
            description: '<h4 class="subheds">COCA CULTIVATION</h4>' + 'Coca farmers earn very little for growing the raw material for cocaine, and they often live under the control of armed or criminal groups. At times, these organisations compel them to grow the crop; in other cases, criminals closely monitor sales and take a cut of the profits.' + '<br /><br />' + 'Farmers often undertake the first step of refining coca leaves into base paste.',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "colombia_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "colombia",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "cauca_province_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "norte_santander_province_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "putumayo_province_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "narino_province_fill",
                    duration: 2000,
                    opacity: 0,
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'COCAINE-1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Where <span class="coca">coca is cultivated</span>, such as in the enclaves of production shown here,  farmers’ contact with traffickers puts them at constant risk for violence, including extortion, recruitment of children, and sexual violence, particularly against rural women heads of household.',
            location: {
                center: [-77.37878, 2.93177],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "colombia_fill",
                    duration: 2000,
                    opacity: 0.7,
                },
                {
                    layer: "colombia",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "cauca_province_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "norte_santander_province_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "putumayo_province_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "narino_province_fill",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'COCAINE-2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '“This is the big problem of coca - it brings all the bad things. It is the precursor of everything bad - armed groups in our areas, recruitment, the lure of fast money”' + '<em>Former female coca farmer in Guaviare, Colombia</em>',
            location: {
                center: [-77.37878, 2.93177],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "colombia_fill",
                    duration: 2000,
                    opacity: 0.7,
                },
                {
                    layer: "colombia",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "cauca_province_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "norte_santander_province_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "putumayo_province_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "narino_province_fill",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: "colombia_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "colombia",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "cauca_province_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "norte_santander_province_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "putumayo_province_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "narino_province_fill",
                    duration: 2000,
                    opacity: 0,
                },
            ]
        },
        {
            id: 'COCAINE-3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<h4>COCA PROCESSING AND TRANSPORTATION - NATIONAL GROUPS</h4>' + 'Coca base paste is <strong>refined into cocaine in labs under the protection of national criminal groups</strong>, such as the Comandos de la Frontera in Colombia’s Putumayo or Los Choneros in Ecuador.' + '<br /><br />' + 'These groups impose control through rules such as limiting citizens’ movements, imposing norms about behaviour, monitoring local civil society, and extorting residents or businesses.',
            location: {
                center: [-79.913222, -2.227940],
                zoom: 14,
                pitch: 70,
                bearing: 50,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "satellite",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "los_rios_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "los-rios",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "ecuador",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "latam_cities_label",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 0,
                },
            ],
            onChapterExit: [
                {
                    layer: "satellite",
                    duration: 2000,
                    opacity: 0,
                },
            ]
        },
        {
            id: 'COCAINE-4',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'National level criminal groups manage the transport of product from labs to exit points abroad, whether ports, airports, or land borders.' + '<br /><br />' + 'Ensuring the drug moves seamlessly across roads requires corrupting local security forces and authorities, as the Gaitanista Army (or Gulf Clan) has successfully done in Colombia, for example.' + '<br /><br />' + 'National criminal groups fight bitter turf wars to secure routes. Battles in Los Ríos, Ecuador, between Los Lobos and Los Choneros gangs are one example of this.',
            location: {
                center: [-79.91784, -2.22528],
                zoom: 7,
                pitch: 50,
                bearing: -29,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "los_rios_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "los-rios",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "ecuador",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities_label",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'COCAINE-5',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '“When the armed group first came, they offered support to the society, and this discourse was intended to penetrate the community… They have monitors at the entrances and exits of each community, they have total control. We as civil society have to hold our meetings outside the area, or we cannot meet, because the information filters [to the group].' + '<br /><br />' + '<em>Social leader in Sucre, Colombia</em>',
            location: {
                center: [-79.91784, -2.22528],
                zoom: 11,
                pitch: 50,
                bearing: 29,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "los_rios_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "los-rios",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "ecuador",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities_label",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'COCAINE-6',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h4>SUBCONTRACTORS - LOCAL GANGS</h4>' + '<br /><br />' + 'Local gangs often control the sale sites where drugs are exported. Port cities and major airports can fall under the control of these bands, which are compensated for their services by national groups.' + '<br /><br />' + 'Their role is to ensure safe passage of the drug to the port of exit, to occasionally store drug locally to avoid police detection, and to load it onto shipping containers or speed boats. In some cases, these small criminal groups are paid in drugs and arms.' + '<span class="photocaption">Buenaventura, once the most violent city in Colombia, has experimented since 2022 with negotiations between the two dominant gangs. Homicide rates have fallen significantly, though residents say extortion and recruitment are up. January 2024. CRISIS GROUP / Elizabeth Dickinson</span>',
            location: {
                center: [-79.91784, -2.22528],
                zoom: 11,
                pitch: 50,
                bearing: 29,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "los_rios_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "los-rios",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "ecuador",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities_label",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'COCAINE-7',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Gangs also manage local drug sales. National groups often provide drugs on consignment to the smaller bands, who sell it for a portion of the profits.' + '<br /><br />' + 'Local gangs exert deep levels of violence against the civilian population, including recruiting young people and children, sexual violence, and extortion. The violent turf wars to secure sales often affect the communities where they operate.',
            location: {
                center: [-79.91784, -2.22528],
                zoom: 11,
                pitch: 50,
                bearing: 29,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "los_rios_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "los-rios",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "ecuador",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities_label",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: "los_rios_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "los-rios",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "ecuador",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "latam_cities_label",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 0,
                },
            ]
        },
        {
            id: 'COCAINE-8A',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<span class="photocaption">Relatives of a victim of a massacre comfort each other at the morgue in Guayaquil, Ecuador on March 7, 2025. Gerardo MENOSCAL / AFP</span>',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'COCAINE-8',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '“The gangs ask for extortion payments, they recruit, they kidnap, and there are hitmen. They arrive to take over the neighbourhood and start kidnapping everyone who does not pay them. There were four adolescents, ages 15, 16 and 18, who were found on the road dead, apparently because they did not pay the extortion. Kids are recruited into these groups from inside their schools”.' + '<br /><br />' + '<em>Local female labor leader in Guayaquil, Ecuador</em>',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'COCAINE-9',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<h4>TRANSNATIONAL SHIPPING - INTERNATIONAL TRAFFICKERS</h4>' + 'International traffickers buy the product at the port of exit for transnational shipping.' + '<br /><br />' + 'These buyer-seller relationships are fiercely contested, and often generate violent competition among national groups.',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'COCAINE-10',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Transnational groups also fuel violence in a number of other ways, such as pouring resources into national allies to ensure they win turf wars against rivals.' + '<br /><br />' + 'Transnational organisations use violence to co-opt and infiltrate government officials, security forces, port workers and shipping companies.' + '<br /><br />' + 'For example, CJNG poured resources into Los Lobos in Ecuador in order to gain a greater share of the market from their primary rival, Los Choneros.',
            location: {
                center: [-85.90954, 11.70422],
                zoom: 4.1,
                pitch: 40,
                bearing: -14,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "panama_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "honduras_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "colombia_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "ecuador_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "costa-rica_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "nicaragua_fill",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'COCAINE-11',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '“The Mexicans have divided the enclaves up between them; they intervene and look for strong leaders and groups, and the logic then is to double them in size. Including with the influx of so many guns and of drug trafficking”.' + '<br /><br />' + '<em>Former gang member, Guayaquil, Ecuador</em>',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "panama_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "honduras_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "colombia_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "ecuador_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "costa-rica_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "nicaragua_fill",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "panama_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "colombia_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "ecuador_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "costa-rica_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "nicaragua_fill",
                    duration: 2000,
                    opacity: 0,
                },
            ]
        },
        {
            id: 'COCAINE-12A',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<h4>STORAGE AND RE-ROUTING</h4>' + 'At times, national criminal groups, for example in Central America, store product coming from third countries or become engaged if there is a last moment needed change of route.',
            location: {
                center: [-93.04360, 14.41479],
                zoom: 6.25,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "honduras_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "guatemala_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "honduras",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "guatemala",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'COCAINE-12',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<h4>FINANCIERS</h4>' + 'Traffickers rely on a network of business people and white-collar criminals to invest in their operations, access the banking system, create shell companies, and launder the money earned along the supply chain.' + '<br /><br />' + 'These investors, known in South America as invisible narcos, benefit richly from their work.' + '<br /><br />' + 'Their direct contact with armed organisations is limited, as they take pains to distance themselves from traffickers through the deployment of emissaries and third-party negotiators, who organise the terms of the business.',
            location: {
                center: [-48.84508, 18.79418],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "panama_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "honduras_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "colombia_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "ecuador_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "costa-rica_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "nicaragua_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "belgium_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "guayakil-antwerp-line",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'COCAINE-13',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '“The financiers are the white collar [criminals], they are businesspeople who come to [move drugs] as a business. They start to make contact with smaller businesspeople… and they offer them a percentage of profits. Those smaller groups provide the logistics, and from there, they will subcontract other smaller logistics providers. From there, these [smaller providers] hire trusted contacts in urban neighbourhoods and offer them a percentage. Everything is a logistics chain.”' + '<br /><br />' + '<em>Former gang member, Guayaquil, Ecuador</em>',
            location: {
                center: [-48.84508, 18.79418],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "panama_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "honduras_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "colombia_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "ecuador_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "costa-rica_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "nicaragua_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "belgium_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "guayakil-antwerp-line",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'COCAINE-14',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'These investors, known in South America as invisible narcos, benefit richly from their work.' + '<br /><br />' + 'Their direct contact with armed organisations is limited, as they take pains to distance themselves from traffickers through the deployment of emissaries and third-party negotiators, who organise the terms of the business.',
            location: {
                center: [-48.84508, 18.79418],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "panama_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "honduras_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "colombia_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "ecuador_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "costa-rica_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "nicaragua_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "belgium_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "guayakil-antwerp-line",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "panama_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "honduras_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "colombia_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "ecuador_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "costa-rica_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "nicaragua_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "belgium_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "guayakil-antwerp-line",
                    duration: 2000,
                    opacity: 0,
                },
            ]
        },
        {
            id: 'FENTANYL',
            alignment: 'full',
            hidden: false,
            title: 'The Fentanyl Route',
            image: '',
            description: '<strong>PRECURSORS - BROKERS</strong>' + '<br /><br />' + 'The production of the synthetic opioid fentanyl begins with the import of precursor chemicals, usually from Asia.' + '<br /><br />' + 'Brokers, often business people with legal companies and easy access to capital markets, organise these purchases.',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'FENTANYL-1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'The production of the synthetic opioid <span class="fentanyl">fentanyl</span> begins with the import of precursor chemicals, usually from Asia.',
            location: {
                center: [114.97610, 23.43231],
                zoom: 3.5,
                pitch: 12,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "China",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "india",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "india_fill",
                    duration: 2000,
                    opacity: 0.7,
                },
                {
                    layer: "china_fill",
                    duration: 2000,
                    opacity: 0.7,
                },
            ],
            onChapterExit: [
                {
                    layer: "China",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "india",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "india_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "china_fill",
                    duration: 2000,
                    opacity: 0,
                },
            ]
        },
        {
            id: 'FENTANYL-2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '“The group uses “brokers in other countries to purchase precursor chemicals from [Chinese] companies on the Cartel’s behalf. Those brokers also assist with ensuring that the precursor chemicals are successfully transported from China to the Cartel in Mexico”' + '<br /><br />' + '<em>U.S. Indictment of Los Chapitos</em>',
            location: {
                center: [-137.88054, 28.74828],
                zoom: 3.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "panama_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "honduras_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "colombia_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "ecuador_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "costa-rica_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "nicaragua_fill",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: "panama_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "honduras_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "colombia_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "ecuador_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "costa-rica_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "nicaragua_fill",
                    duration: 2000,
                    opacity: 0,
                },
            ]
        },
        {
            id: 'FENTANYL-3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<h4>LOCAL/NATIONAL GROUP</h4>' + 'Successfully bringing chemicals into Mexico often requires control of ports, penetration of port staff and corruption in the security forces.' + '<br /><br />' + 'Criminal groups compete fiercely for this control, fighting turf wars and threatening functionaries who do not comply with their demands.',
            location: {
                center: [-108.27634, 19.53883],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "mexico",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "manzanillo",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "manzanillo_label",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "mexico",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "manzanillo",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "manzanillo_label",
                    duration: 2000,
                    opacity: 0,
                },
            ]
        },
        {
            id: 'FENTANYL-4',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: 'In Manzanillo, Mexico, for example, local groups appear to pay the CJNG for permission to operate around the port, providing services to traffickers and stealing cargo from rivals.',
            location: {
                center: [-103.26209, 18.21721],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'FENTANYL-5',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h4>FENTANYL SYNTHESIS</h4>' + 'These criminal groups move precursors to “cooks”, who produce the drug. There are a limited number of people trusted by major criminal groups to do this, and they are closely controlled. The cooks are responsible for ensuring the quality of the products for these clients.' + '<br /><br />',
            location: {
                center: [-103.26209, 18.21721],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'FENTANYL-6',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '“No one hears or sees anything. They find a laboratory in the neighbourhood and no one dares to say a thing. Why? Because all of us are scared. These criminals have the support of [parts of the] state, and we have nothing.”' + '<br /><br />' + '<em>Local journalist in Baja California</em>',
            location: {
                center: [-103.26209, 18.21721],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities_label",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "latam_cities_label",
                    duration: 2000,
                    opacity: 0,
                },
            ]
        },
        {
            id: 'FENTANYL-7',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h4>PACKAGING AND TRANSPORTATION - INTERNATIONAL TRAFFICKERS</h4>' + 'The brand name criminal groups buy fentanyl for trafficking northward to the United States. Often, the drug is branded or packaged with the name of the drug trafficking organisation, such as Sinaloa or CJNG, in order to avoid it being filtered off or sold to rivals.' + '<span class="photocaption">A member of the Sinaloa Cartel shows packs with methamphetamine in a safe house in Culiacan, Mexico, April 4, 2022. To match Special report MEXICO-DRUGS/CHAPITOS REUTERS/Alexandre Meneghini</span>',
            location: {
                center: [-103.26209, 18.21721],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'FENTANYL-8A',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Transport to market along roads and by boat to the United States largely falls under the jurisdiction of these international traffickers, who fight violent battles to control turf and secure routes.' + '<br /><br />' + 'Penetration of the security forces and local authorities is also fundamental for business.',
            location: {
                center: [-108.47314, 25.33654],
                zoom: 6,
                pitch: 50,
                bearing: 20,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "sinaloa_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "mexico",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "united states",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "us_sw_state_labels",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: "sinaloa_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "mexico",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "united states",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "us_sw_state_labels",
                    duration: 2000,
                    opacity: 0,
                },
            ]
        },
        {
            id: 'FENTANYL-8',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h4>SUBCONTRACTORS - NATIONAL/LOCAL GROUPS</h4>' + 'At certain points of shipment, international traffickers may need to pay local criminals for safe passage, or even hand over the product to them for movement from point A to point B.' + '<span class="photocaption">The leader of a criminal group and one of his guards walk through a nightly back alley of a town they control. Michoacán state, Mexico. July 2023. CRISIS GROUP / Falko Ernst.</span>',
            location: {
                center: [-103.26209, 18.21721],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "mexico",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "latam_cities_label",
                    duration: 2000,
                    opacity: 0,
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'FENTANYL-9',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'These local groups are deeply violent, imposing their criminal control through extortion, recruitment, and targeted killing. Often, they have forged ties to local authorities and security forces to facilitate business.',
            location: {
                center: [-102.37980, 24.23877],
                zoom: 4.25,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "mexico",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities_label",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'FENTANYL-10',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '“In areas controlled by Los Rusos, the city is so heavily monitored that ‘the community knows that they cannot so much as think about putting on music that the group doesn’t like, because they will be picked up.’”' + '<br /><br />' + '<em>Local journalist in Baja California</em>',
            location: {
                center: [-102.37980, 24.23877],
                zoom: 4.25,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "mexico",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities_label",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "mexico",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "latam_cities_label",
                    duration: 2000,
                    opacity: 0,
                },
            ]
        },
        {
            id: 'FENTANYL-11',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h4>DOMESTIC MARKET</h4>' + 'The domestic drug market is a major money-maker in Mexico, and its management is largely subcontracted out to local criminal franchises trusted by larger cartels.' + '<br /><br />' + 'The “jefe de plaza”, or local criminal boss, sets the rules for how the drug and all other businesses function.' + '<span class="photocaption">A member of the NGO Programa Companeros, which implements programs and projects aimed at vulnerable social groups, shows a vial of Naloxone used to rapidly reverse opioid overdose, in Ciudad Juarez, Mexico July 24, 2023. REUTERS/Jose Luis Gonzalez</span>',
            location: {
                center: [-103.26209, 18.21721],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'FENTANYL-12',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Residents describe these individuals’ behavior as unpredictable; while some control petty crime and discourage violence, others prey on the population and violently target rivals or those who would question criminal governance.' + '<br /><br />' + 'Access to arms and drugs are major lures for local groups to forge ties with larger traffickers; these tools facilitate their movement into extractive businesses including human trafficking, kidnapping and extortion.',
            location: {
                center: [-115.94566, 30.98964],
                zoom: 6.25,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "mexico",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 1,
                },
                {
                    layer: "latam_cities_label",
                    duration: 2000,
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: "mexico_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "mexico",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "US_fill",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "latam_cities",
                    duration: 2000,
                    opacity: 0,
                },
                {
                    layer: "latam_cities_label",
                    duration: 2000,
                    opacity: 0,
                },
            ]
        },
        {
            id: 'FENTANYL-13',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h4>INTERNATIONAL TRAFFICKERS</h4>' + 'By the time it is sold in the streets of the United States, the value of fentanyl has increased between 600 and 800 times when compared with the price invested in purchasing precursors.',
            location: {
                center: [-103.26209, 18.21721],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'FENTANYL-14',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h4>FINANCIERS</h4>' + 'As with cocaine, the fentanyl market needs white collar business people to function.' + '<br /><br />' + 'These individuals are the brokers who move in precursors, the money launderers who have access to the banking system, and the accountants who manage payment along complex supply chains.',
            location: {
                center: [-103.26209, 18.21721],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'FENTANYL-15',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '“The Cartel has the largest international operations of any drug trafficking organization, with a criminal network encompassing nearly every major city from New York to Buenos Aires and a presence in more than 45 countries around the world.”' + '<br /><br />' + '<em>US Indictment of Chapitos</em>',
            location: {
                center: [-37.04445, 38.28202],
                zoom: 2.4,
                pitch: 25,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'END',
            alignment: 'none',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-37.04445, 38.28202],
                zoom: 2.4,
                pitch: 25,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        }
    ]
};