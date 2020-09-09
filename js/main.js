var pageState = 5

function closePanels() {
    var main = document.getElementById('main');
    for (let index = 0; index < main.children.length; index++) {
        const element = main.children[index];
        element.classList.remove("visible");
    }

    var menu = document.getElementById('menu');

    for (let index = 0; index < menu.children.length; index++) {
        const element = menu.children[index];
        element.classList.remove("active");
    }
}

function tooglePanel() {
    closePanels()

    var panelName = this.innerText;
    this.classList.toggle("active");

    switch (panelName) {
        case "Experience":
            var experiencePanel = document.getElementById("experience");
            experiencePanel.classList.toggle("visible");
            break;
        case "Projects":
            var projectsPanel = document.getElementById("projects");
            projectsPanel.classList.toggle("visible");
            break;
        case "Bio":
            var projectsPanel = document.getElementById("bio");
            projectsPanel.classList.toggle("visible");
            break;
        default:
            break;
    }
}

window.onload = function () {
    var menu = document.getElementById('menu')
    var main = document.getElementById('main')

    for (let index = 0; index < menu.children.length; index++) {
        const element = menu.children[index];
        element.addEventListener("click", tooglePanel)
    }

    for (let index = 0; index < main.children.length; index++) {
        var closeButton = document.createElement("span")
        closeButton.classList += "close"
        closeButton.addEventListener("click", closePanels)
        closeButton.textContent = "x"

        const element = main.children[index]
        element.prepend(closeButton)
    }

    var projectsPanel = document.getElementById("projects")
    var ul = document.createElement("ul")
    data.projects.forEach(element => {
        var li = document.createElement("li")
        var title = document.createElement("h3")
        title.textContent = element.name
        var span = document.createElement("span")
        var a = document.createElement("a")
        a.href = element.url
        a.target = "_blank"
        a.textContent = element.source
        span.append(a)
        span.append(document.createTextNode(" - " + element.category))
        var p = document.createElement("p")
        p.textContent = element.info
        li.append(title)
        li.append(span)
        li.append(p)
        ul.append(li)
    })
    projectsPanel.append(ul)

    var experiencePanel = document.getElementById("experience");
    var ul2 = document.createElement("ul")
    data.experience.forEach(element => {
        var li = document.createElement("li")
        var title = document.createElement("h3")
        title.textContent = element.date
        var span = document.createElement("span")
        var a = document.createElement("a")
        a.href = element.url
        a.target = "_blank"
        a.textContent = element.company
        span.append(a)
        span.append(document.createTextNode(" - " + element.title))
        var p = document.createElement("p")
        p.textContent = element.description
        li.append(title)
        li.append(span)
        li.append(p)
        ul2.append(li)
    })
    experiencePanel.append(ul2)
}

var data = {
    "experience": [
        {
            title: "Computer Science",
            company: "FCUP",
            url: "https://sigarra.up.pt/fcup/pt/web_page.Inicial",
            date: 2012,
            skills: [],
            description: "Started computer studies with emphasis on theory."
        },
        {
            title: "Informatics Engineering",
            company: "ISEP",
            url: "https://www.isep.ipp.pt/",
            date: 2013,
            skills: [],
            description: "Changed university due to need of a more pratical approach into programming."
        },
        {
            title: "IoT Platform Thingworx",
            company: "Celfocus",
            url: "https://www.celfocus.com/home/",
            date: 2016,
            skills: ["Internet of things", "Thingworkx", "Java", "Javascript", "Linux"],
            description: "Worked on Internet of Things projects, mainly proofs of concept, based on the Thingworx platform, developing skills in Java, Javascript and Linux."
        },
        {
            title: "IoT Microservices & CIoT Vodafone V-App",
            company: "Celfocus & Vodafone",
            url: "https://www.vodafone.co.uk/mobile/smart-tech/",
            date: 2018,
            skills: ["Docker", "Microservices"],
            description: "Worked on a Vodafone project, developing skills on docker and microservices and experiencing an international project with a bigger scope. It was also a big opportunity to apply skills learned in previous years, improving them."
        },
        {
            title: "Web Platform Management",
            company: "ESAD",
            url: "https://esad.pt/",
            date: 2019,
            skills: ["Web", "Deploying", "Supporting", "SQL", "Google Cloud Platform", "Ruby"],
            description: "Developed web based skills and had the opportunity of developing a wide range of skills, due to a small team, such as deploying, maintaining old code, maintaining multiple SQL Databases and supporting applications that were hosted on Google Cloud Platform."
        }

    ],
    "projects": [
        {
            language: "Java",
            name: "JWallet",
            category: "Wallet Management",
            info: "JWallet is a application where you can create and manage your virtual wallet.",
            source: "Github",
            url: "https://github.com/FernandoPinto/JWallet"
        },
        {
            language: "Java",
            name: "Soundanoid",
            category: "Game",
            info: "Soundanoid is a Arkanoid clone but as the user is playing a song is being created. This idea of a game was developed only using java, without any framework, and it hasn't reached a final version.",
            source: "Github",
            url: "https://github.com/FernandoPinto/Soundanoid"
        },
        {
            language: "Web Design (HTML + CSS + JS)",
            name: "+InfoPorto",
            category: "Turism App",
            info: "+InfoPorto is a mockup that won the 2nd place in Porto Summer of Code '14. The app read QR codes and NFC tags that are located in key places of the city, showing key info about those places, such as who and when it was built and how it affected the city.",
            source: "Porto Summer of Code '14",
            url: "https://www.facebook.com/pg/makeorbreak.io/photos/?tab=album&album_id=1516594015252196"
        },
        {
            language: "Web Design (HTML + CSS + JS)",
            name: "PlanIt",
            category: "Planning App",
            info: "PlanIt is a mockup developed in Porto Summer of Code '15, which unfortunatly didn't won the contest. The app helped the users to plan their events, using a system of priorities and AI to re schedule any events that overlapped each other.",
            source: "Porto Summer of Code '15",
            url: "https://www.facebook.com/pg/makeorbreak.io/photos/?tab=album&album_id=1672683786309884"
        },
        {
            language: "P5.JS (Javascript)",
            name: "WaveTunnel",
            category: "Digital Visuals",
            info: "WaveTunnel is my most recent project, it aims to fuse my passion of programming with an urge to explore my artistic side. In order to do it I used the p5.js framework and javascript knowledge and began exploring the concept. The progress of the application can be seen on Instagram and on ",
            source: "Github IO",
            url: "https://fernandoesparrinha.github.io/WaveTunnel/"
        }
    ]
}