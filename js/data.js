var data = {
    "experience": [
        {
            title: "Computer Science",
            company: "FCUP",
            url: "https://sigarra.up.pt/fcup/pt/web_page.Inicial",
            type: "Education",
            year: 2012,
            start_date: "01/01/2012",
            end_date: "01/01/2012",
            sources: [],
            skills: [],
            short_description: "Started computer studies with emphasis on theory.",
            full_description: "The choice for computer science was a easy one, it was one of my biggest interests and I was eager to learn the different skills that existed in the world of computers. After a couple of months I realized that the course was heavily based on math and general computer theory, I was feeling an urge to explore computers using a more pratical approach, so I decided to quit the course and got my aim on the Instituto de Engenharia do Porto (ISEP).",
            projects: {}
        },
        {
            title: "Informatics Engineering",
            company: "ISEP",
            url: "https://www.isep.ipp.pt/",
            type: "Education",
            year: 2013,
            start_date: "01/01/2013",
            end_date: "01/01/2016",
            sources: ["resources/Relatório_PESTI.pdf"],
            skills: [],
            short_description: "Changed university due to need of a more pratical approach into programming.",
            full_description: "After experiencing classes in FCUP, ISEP seemed to give me more of what I wanted. Classes started straight into pseudocode and programming and were very usefull, altough I feel that I've learned more with friends than on classes. The course mainly focused on java and key aspects of programming such as data structures and algorithms but I always felt an attraction to web development and explored the area while on my free time. The last year of the course consisted in some classes and an internship, associated with a single project. I did my internship on Celfocus, a joint venture between Novabase and Vodafone Portugal, developing the connection between a shirt with hearth sensors and its users and documenting everything to be demonstraded in the end (The report is acessible in the sources down below). This project was my entry into the world of IoT, we used the Thingworx Platform and I got to explore some technologies like communication protocols which I had never heard of (like CoAP and MQTT), technologies that I've learned in ISEP and got to apply in a professional environment (Java, Linux, Jenkins) and even a small integration into the IFTTT platform. At the end, my project got the grade of 17.",
            projects: {}
        },
        {
            title: "IoT Platform Thingworx",
            company: "Celfocus",
            url: "https://www.celfocus.com/home/",
            type: "Contract",
            year: 2016,
            start_date: "29/02/2016",
            end_date: "01/09/2018",
            sources: ["https://www.celfocus.com/call/index.php/to-know/smart-cities-smart-homes-smart-wear"],
            skills: ["Internet of things", "Thingworkx", "Java", "Javascript", "Linux"],
            short_description: "Worked on Internet of Things projects, mainly proofs of concept, based on the Thingworx platform.",
            full_description: "After finishing the internship Celfocus offered me a contract, I accepted. The change from internship into work was a very subtle one, I continued the exploration of Thingworx and did Proof of Concept projects in the scope of IoT. The projects I worked on had very different environments, which contributed a lot to my knowledge of the world of IoT.",
            projects: {
                "Gas Metering": "Solution to manage several gas sensors, scattered through Portugal. In the platform the user could observe different values of consumption aswell as predictive forecasts through the whole country, being able to choose a district in order to filter the information. The platform could also manage alerts such has warnings about batteries, possible frauds or levels of temperature.",
                "Kenya Smart Petrol": "Petrol Stations management platform, in Kenya, where the company could track the Petrol Stations consumption in order to estimate how much the consumers filled their tanks and also find any possible leak or theft (common problems in Kenya), this information was also processed with the transportation fleet, so the company could plan the best route while filling the different stations.",
                "Smart Eletricity": "Eletricity management platform which allowed the company to track eletricity consumption of different buildings. The platform provided the location of all the eletricity smart counters scattered in a interactive map. This application had a focus on fraud and theft, using algorithms to find cases in which consumers were consuming way too much electricity (which could mean someone was pulling electricity from that building). The platform also supported a vacation mode, in which if the user wasn't at home the platform would warn any suspicious electricity use.",
                "Cascais Green City": "Iniciative made for the city of Cascais, which used some information gathered to build an IoT platform, users could observe key information such as air quality, captured using real sensors gathered throughout the city which allowed for real-time geo-referenced information.",
                "Watering Systems": "Monitoring multiple watering systems, with information regarding different valves, such as pressure and temperature of the water. We had some sensors deployed in the field but a simulator was developed in order to demonstrate how the portal would react in a live environment, where the company would deploy multiple valves scattered through multiple systems.",
                "Smart World": "A overall portal which aggregated every proof of concept that we built before (the ones mentioned above). This was a great oportunity to align every project into a single web platform, the development of each project did already follow the same principals of development and design, the graphical interfaces had some aspects in common which made easier for us to centralize everything and built some templates which could be used in future concepts."
            }
        },
        {
            title: "V by Vodafone",
            company: "Vodafone",
            url: "https://www.vodafone.co.uk/mobile/smart-tech/",
            type: "Contract",
            year: 2018,
            start_date: "14/05/2018",
            end_date: "01/09/2018",
            sources: ["https://www.pocket-lint.com/smart-home/news/vodafone/145132-vodafone-v-home-smart-devices-family"],
            skills: ["Docker", "Microservices"],
            short_description: "Worked on a Vodafone project, developing skills on docker and microservices and experiencing an international project with a bigger scope. It was also a big opportunity to apply skills learned in previous years, improving them.",
            full_description: "Even tough the Thingworx projects were fun and provided multiple sources of knowledge, I wanted to be part of a bigger project, instead of multiple proofs of concept. Celfocus made this request come true and integrated me in a team that was going to work with Vodafone. The project was based on Germany, this allowed me to travel and observe different work ethnicities. Our team had 4 people and our main objective was to soak up as much information as we could at the same time as we were helping Vodafone in catching bugs and potential problems. This project provided an experience which I couldn't gather elsewhere, being thrown into a full working team with people working across the globe was a very good experience and allowed me to grow as a profissional.",
            projects: {
                "V by Vodafone": "Vodafone IoT project, which envolved multiple devices such as trackers for your pet or bag, cameras, SIM cards and watches."
            }
        },
        {
            title: "Web Platform Management",
            company: "ESAD",
            url: "https://esad.pt/",
            type: "Contract",
            year: 2018,
            start_date: "27/09/2018",
            end_date: "present",
            sources: ["https://me.esad.pt/"],
            skills: ["Web", "Deploying", "Supporting", "SQL", "Google Cloud Platform", "Ruby"],
            short_description: "Web based development, while improving a wide range of skills, due to a small team, such as deploying, maintaining old code, managing SQL Databases and supporting applications that were hosted on Google Cloud Platform.",
            full_description: "When I received information that ESAD was looking for a programmer my inicial reaction was hesitant, I was enjoying the Vodafone CIoT Project altough I felt like I needed more experience developing full stack and understanding every aspect of a project. Due to this need and because Design was something that I like, I decided to accept the challenge and got into ESAD. A close friend of mine that worked there was the one that got me to join, and working at ESAD was a great oportunity to learn from him, a full stack web developer. In ESAD, due to a very small team, I managed to learn and improve key aspects of the development of a web application, from the deployment stage to the support of the application. Altough the development was mainly in Ruby, the most explored technology was Google Cloud Platform (GCP) as it was the main pillar of all our platforms. I got to explore deploying and maintaining a SQL database, multiple virtual machines, cloud build CI/CD, multiple web services and more GCP features, at the same time I supported and developed new functionalities on the ME.ESAD platform.",
            projects: {
                "ME.ESAD": "A web platform that supports all school activities, such as summary creation, student absences, work offers, schedules, library contents and more. This platform has a strong connection to Google, due to all the applications used by the school and user accounts (which are Google accounts), and a software called Sophia, which the school is forced to use due to certification that is needed in order to validate all the information with the portuguese government. One of the biggest challenges in this project is the maintenance of the integration between ME.ESAD and Sophia, which can provide quite intricate problems."
            }
        }
    ],
    "projects": [
        {
            language: "Javascript",
            name: "H0b0 - Redo",
            category: "Musical Web Experience",
            tags: ["shaders", "p5.js", "sound", "web"],
            description: "Had the pleasure of helping a close friend of mine, developing a musical web experience.",
            site: "https://redo.h0b0.me/",
            github: "https://github.com/FernandoEsparrinha/h0b0-redo"
        },
        {
            language: "Javascript",
            name: "WaveTunnel",
            category: "Visual Dynamic Experience",
            tags: ["p5.js", "visual", "web", "osc", "midi controller"],
            description: "Always had some curiosity in applying programming in a more artistic product, WaveTunnel was the project were I started exploring p5.js.",
            site: "https://fernandoesparrinha.github.io/WaveTunnel/",
            github: "https://github.com/FernandoEsparrinha/WaveTunnel"
        },
        {
            language: "Web Design (HTML + CSS + JS)",
            name: "PlanIt",
            category: "Planning App",
            tags: ["task management", "p5.js", "sound", "web"],
            description: "PlanIt is a mockup developed in Porto Summer of Code '15, which unfortunatly didn't won the contest. The app helped users to plan their events, using a system of priorities and AI to re schedule any events that overlapped each other.",
            site: "https://www.facebook.com/pg/makeorbreak.io/photos/?tab=album&album_id=1672683786309884",
            github: "",
        },
        {
            language: "Web Design (HTML + CSS + JS)",
            name: "+InfoPorto",
            category: "Turism App",
            tags: ["web", "turism", "coding competition"],
            description: "+InfoPorto is a mockup that won the 2nd place in Porto Summer of Code '14. The app read QR codes and NFC tags that are located in key places of the city, showing key info about those places, such as who and when it was built and how it affected the city.",
            site: "https://www.facebook.com/pg/makeorbreak.io/photos/?tab=album&album_id=1516594015252196",
            github: ""
        }
    ]
}