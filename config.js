var config = {
    style: 'mapbox://styles/daltonwb/cm7sykztn00ov01sb1mrs5i3f',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    projection: 'globe',
    inset: true,
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
            alignment: 'none',
            hidden: false,
            title: 'Violence spans the complex supply chain that moves drugs from Latin America to consumer markets.',
            image: '',
            description: 'Years of law enforcement crackdowns have fractured dominant armed organisations and spawned a new generation of more flexible and dispersed groups.',
            location: {
                center: [34.36204, 31.43325],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gaza',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'gazaa-place-label',
                    opacity: 1,
                    duration: 2000
                },
            ],
            onChapterExit: [
               
            ]
        },
        {
            id: 'INTRO02',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Trafficking requires a network of criminal groups spread across continents. Any one supply chain from production to sale might include a dozen players, with only fluid alliances of convenience to hold them together.' + '<div class="spacer"></div>' + 'Security operations in one geographic area tend to push traffickers to new theatres, as criminals hopscotch between jurisdictions to avoid policing. <strong>Competition among criminal groups for a piece of the market is fierce.</strong>',
            location: {
                center: [-40.92406, 14.59357],
                zoom: 2,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'INTRO03',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Yet even amid this chaotic picture, there are clear hierarchies among criminal groups largely based on the tasks they perform along the drug pipeline.' + '<div class="spacer"></div>' + 'Each organisational tier sub-contracts certain functions out to increasingly smaller allies, down to the most local level.' + '<div class="spacer"></div>' + 'While each drug and route differs, broadly speaking, <strong>profits and income tend to cluster at the top, among the most powerful financiers and international traffickers, while violence toward communities is most widespread at the bottom, where gangs and local groups exercise coercive control.</strong>',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            description: '',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            description: 'COCA CULTIVATION' + '<div class="spacer"></div>' + 'Coca farmers earn very little for growing the raw material for cocaine, and they often live under the control of armed or criminal groups. At times, these organisations compel them to grow the crop; in other cases, criminals closely monitor sales and take a cut of the profits.' + '<div class="spacer"></div>' + 'Farmers often undertake the first step of refining coca leaves into base paste.',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                
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
            description: 'Farmers’ contact with coca traffickers puts them at <strong>constant risk for violence</strong>, including extortion, recruitment of children, and sexual violence, particularly against rural women heads of household.',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                
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
            description: '“This is the big problem of coca - it brings all the bad things. It is the precursor of everything bad - armed groups in our areas, recruitment, the lure of fast money”' + '<div class="spacer"></div>' + '<em>Former female coca farmer in Guaviare, Colombia</em>',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'COCAINE-3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'COCA PROCESSING AND TRANSPORTATION - NATIONAL GROUPS' + '<div class="spacer"></div>' + 'Coca base paste is refined into cocaine in labs under the protection of national criminal groups, such as the Comandos de la Frontera in Colombia’s Putumayo or Los Choneros in Ecuador.' + '<div class="spacer"></div>' + 'These groups impose control through rules such as limiting citizens’ movements, imposing norms about behaviour, monitoring local civil society, and extorting residents or businesses.',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'COCAINE-4',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'National level criminal groups manage the transport of product from labs to exit points abroad, whether ports, airports, or land borders.' + '<div class="spacer"></div>' + 'Ensuring the drug moves seamlessly across roads requires corrupting local security forces and authorities, as the Gaitanista Army (or Gulf Clan) has successfully done in Colombia, for example.' + '<div class="spacer"></div>' + 'National criminal groups fight bitter turf wars to secure routes. Battles in Los Ríos, Ecuador, between Los Lobos and Los Choneros gangs are one example of this.',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                
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
            description: '“When the armed group first came, they offered support to the society, and this discourse was intended to penetrate the community… They have monitors at the entrances and exits of each community, they have total control. We as civil society have to hold our meetings outside the area, or we cannot meet, because the information filters [to the group].' + '<div class="spacer"></div>' + '<em>Social leader in Sucre, Colombia</em>',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
    ]
};
