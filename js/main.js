var pageState = 5

function tooglePanel() {
    var panelName = this.innerText
    switch (panelName) {
        case "Experience":
            var aboutPanel = document.getElementById("experience")
            aboutPanel.classList.toggle("slideFromLeft")
            aboutPanel.classList.toggle("slideFromRight")
            break;
        case "Projects":
            var projectsPanel = document.getElementById("skills")
            projectsPanel.classList.toggle("slideFromRight")
            projectsPanel.classList.toggle("slideFromLeft")
            break;
        default:
            break;
    }
}

window.onload = function () {
    var menu = document.getElementById('menu');

    for (let index = 0; index < menu.children.length; index++) {
        const element = menu.children[index];
        element.addEventListener("click", tooglePanel);
    }
}

var data = {
    "experience": [
        {
            "title": "Computer Science",
            "company": "FCUP",
            "date": 2012,
            "skills": [],
            "description": "Start of computer studies with emphasis on teory."
        },
        {
            "title": "Informatics Engineering",
            "company": "ISEP",
            "date": 2013,
            "skills": [],
            "description": "Changed university due to the need of a more pratical approach into programming."
        },
        {
            "title": "IoT Platform Thingworx",
            "company": "Celfocus",
            "date": 2016,
            "skills": ["Internet of things", "Thingworkx", "Java", "Javascript", "Linux"],
            "description": "Worked on Internet of Things projects, mainly proofs of concept, based on the Thingworx platform, developing skills in Java, Javascript and Linux."
        },
        {
            "title": " IoT Microservices & CIoT Vodafone V-App",
            "company": "Celfocus",
            "date": 2018,
            "skills": ["Docker", "Microservices"],
            "description": "Worked on a Vodafone project which made me develop skills on docker and microservices and experience  an international project with a bigger scope. It was also a big opportunity to apply skills learned in previous years, improving them."
        }
    ],
    "projects": [
        {
            "name": "",
            "skills": [],
            "url": ""
        }
    ]
}