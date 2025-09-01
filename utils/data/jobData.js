export const jobData = [
    {
        id: 1,
        jobTitle: "Full-Stack Developer & DevOps",
        company: "Eigenständige Projekte & kontinuierliche Weiterbildung",
        date: "04/2023 - Heute",
        webdevitem: true,
        projects: [
            {
                title: "🚀 Fahrradwohnwagen: Komplettes IoT-Ökosystem",
                responsibilities: [
                    {
                        title: "Hardware-Design:",
                        description: "Autarkes 12V Solarsystem mit BMS Batteriemanagement und Energieüberwachung",
                    },
                    {
                        title: "Mikrocontroller:",
                        description: "ESP32-basierte Firmware in MicroPython für Sensor-Integration und Hardware-Steuerung",
                    },
                    {
                        title: "Server-Infrastruktur:",
                        description: "Raspberry Pi mit nginx als WiFi Access Point und API-Gateway",
                    },
                    {
                        title: "Frontend-Development:",
                        description: "Responsive Progressive Web App für mobile Gerätesteuerung",
                    },
                    {
                        title: "System-Integration:",
                        description: "Lüftersteuerung, Lichtmanagement, Batterie-Monitoring mit Echtzeit-Dashboard",
                    },
                ],
                repository: "Repository: github.com/Lutz-Dietterich/fawowaControl",
            },
        ],
        technologies: ["TypeScript", "MicroPython", "Raspberry Pi", "nginx", "Docker", "Proxmox", "Hardware Integration", "Git Workflows"],
    },
    {
        id: 2,
        jobTitle: "Trainee Full-Stack Developer",
        company: "neue fische - School and Pool for Digital Talent",
        date: "01/2023 - 04/2023",
        webdevitem: true,
        description:
            "Intensiv-Bootcamp mit 540h praktischer Programmierung: Vollständige MERN-Stack Ausbildung von den Grundlagen bis zur professionellen Anwendungsentwicklung",
        responsibilities: [
            {
                title: "Frontend-Mastery:",
                description: "React Hooks, State Management, Component Architecture, Responsive Design",
            },
            {
                title: "Backend-Development:",
                description: "Node.js Server, Express.js Routing, RESTful API Design, Authentication",
            },
            {
                title: "Database-Design:",
                description: "MongoDB Schema-Entwicklung, Mongoose ODM, Data-Modeling",
            },
            {
                title: "Development-Workflow:",
                description: "Git Version Control, Agile Methodiken, Code Reviews, Testing",
            },
        ],
        finalProject: {
            title: 'Abschlussprojekt "pawfect-match.de":',
            description:
                "Vollständige Haustier-Matching-Platform mit User Authentication, Profil-Management, Such-Algorithmus und Real-time Messaging",
        },
        technologies: [
            "JavaScript ES8+",
            "React 18.2",
            "Next.js",
            "MongoDB",
            "Node.js",
            "Express.js",
            "REST API",
            "Git Workflow",
            "Agile Methods",
        ],
    },

    {
        id: 3,
        jobTitle: "Anlagenmechaniker SHK - Teamleitung & Projektmanagement",
        company: "Schneider und Steffens GmbH & Co KG, weitere Unternehmen",
        date: "2015 - 2022",
        webdevitem: false,
        responsibilities: [
            {
                title: "Projektleitung:",
                description: "Koordination komplexer Heizungs-, Sanitär- und Klimaanlagen in Industrie und Gewerbe",
            },
            {
                title: "Teamführung:",
                description: "Anleitung von Fachkräften, Qualitätskontrolle und Terminmanagement",
            },
            {
                title: "Systemintegration:",
                description: "Installation und Konfiguration vernetzter Gebäudetechnik",
            },
            {
                title: "Troubleshooting:",
                description: "Systematische Fehleranalyse und Reparatur komplexer Anlagensysteme",
            },
        ],
    },

    {
        id: 4,
        jobTitle: "Selbstständiger Unternehmer - Digitalisierung & Marketing",
        company: "Lutz Dietterich, Dassendorf",
        date: "2011 - 2015",
        webdevitem: false,
        responsibilities: [
            {
                title: "Wendepunkt zur IT:",
                description: "Intensive Beschäftigung mit Online-Marketing, Webentwicklung und digitalen Strategien",
            },
            {
                title: "Spezialisierung:",
                description: "Hochpräzisions-Kühlung für Computertomographen und sterile Reinraum-Lüftungsanlagen",
            },
            {
                title: "Business Development:",
                description: "Kundenakquise, Angebotserstellung, Projektabwicklung",
            },
            {
                title: "Gründer-Coaching:",
                description: "Neuromarketing, Positionierung und digitale Geschäftsmodelle",
            },
        ],
    },
    {
        id: 5,
        jobTitle: "Servicetechniker Kälte-/Klimatechnik - Präzisionssysteme",
        company: "Ralf Thomae, Clausen Systemkühlung, Lennox Deutschland",
        date: "2007 - 2011",
        webdevitem: false,
        responsibilities: [
            {
                title: "Mission-Critical Systems:",
                description: "Wartung und Reparatur in Forschungsschiffen, Marineschleifen, U-Booten",
            },
            {
                title: "Medizintechnik:",
                description: "Krankenhaus-Klimaanlagen, Präzisionskühlung für medizinische Geräte",
            },
            {
                title: "Luxusyachten:",
                description: "Hochwertige Klimasysteme mit anspruchsvoller Steuerungstechnik",
            },
            {
                title: "Industrieanlagen:",
                description: "Großkühlsysteme in Supermärkten und Industriebetrieben",
            },
        ],
    },
];

export default jobData;
