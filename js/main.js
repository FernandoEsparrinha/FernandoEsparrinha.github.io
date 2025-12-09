var currentExperience = null

function closePanels() {
    var main = document.getElementById('main');
    for (let index = 0; index < main.children.length; index++) {
        const element = main.children[index]
        element.classList.remove("visible")
    }

    var menu = document.getElementById('menu')
    for (let index = 0; index < menu.children.length; index++) {
        const element = menu.children[index]
        element.classList.remove("active")
    }
}

function tooglePanel() {
    closePanels()
    closeModal()

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

    document.getElementById("back-button").style.display = "inline"
}

function closeModal() {
    clearModal()
    document.getElementById("modal").style.display = "none"
}

function clearModal() {
    document.getElementById("modal-date").textContent = ""
    document.getElementById("modal-job").textContent = ""
    document.getElementById("modal-tags").textContent = ""
    document.getElementById("full-description").textContent = ""
    document.getElementById("project-list").textContent = ""
    document.getElementById("source-list").textContent = ""
}

function previousModal() {
    populateModal(data.experience[currentExperience - 1])
}

function nextModal() {
    populateModal(data.experience[currentExperience + 1])
}

function populateModal(element) {
    clearModal();
    currentExperience = data.experience.indexOf(element);

    // Update navigation buttons
    document.getElementById("modal-previous").style.display = currentExperience === 0 ? "none" : "block";
    document.getElementById("modal-next").style.display = currentExperience === data.experience.length - 1 ? "none" : "block";

    // Populate modal content
    populateModalHeader(element);
    populateModalTags(element.skills);
    populateModalDescription(element.full_description);
    populateModalProjects(element.projects);
    populateModalSources(element.sources);

    closePanels();
    document.getElementById("modal").style.display = "grid";
}

function populateModalHeader(element) {
    const headerCompany = document.createElement("h1");
    headerCompany.textContent = element.company;

    const headerTitle = document.createElement("h2");
    headerTitle.textContent = element.title;

    const date = document.createElement("h4");
    date.textContent = `${element.end_date} - ${element.start_date}`;

    document.getElementById("modal-date").append(date);
    document.getElementById("modal-job").append(headerCompany, headerTitle);
}

function populateModalTags(skills) {
    const tagList = document.createElement("ul");
    skills.forEach(skill => {
        const tag = document.createElement("li");
        tag.textContent = skill;
        tagList.append(tag);
    });
    document.getElementById("modal-tags").append(tagList);
}

function populateModalDescription(descriptionText) {
    const description = document.createElement("p");
    description.textContent = descriptionText;
    document.getElementById("full-description").append(description);
}

function populateModalProjects(projects) {
    if (Object.keys(projects).length === 0) return;

    const title = document.createElement("h4");
    title.textContent = Object.keys(projects).length === 1 ? "Project" : "Projects";

    const projectList = document.createElement("ul");
    for (const [titleText, descriptionText] of Object.entries(projects)) {
        const projectItem = document.createElement("li");

        const projectTitle = document.createElement("span");
        projectTitle.textContent = titleText;

        const projectConnect = document.createElement("span");
        projectConnect.innerHTML = "&succ;";

        const projectDescription = document.createElement("span");
        projectDescription.textContent = descriptionText;

        projectItem.append(projectTitle, projectConnect, projectDescription);
        projectList.append(projectItem);
    }

    document.getElementById("project-list").append(title, projectList);
}

function populateModalSources(sources) {
    if (sources.length === 0) return;

    const title = document.createElement("h4");
    title.textContent = "Sources";

    const sourcesList = document.createElement("ul");
    sources.forEach(source => {
        const sourceItem = document.createElement("li");
        const sourceLink = document.createElement("a");
        sourceLink.setAttribute("href", source);
        sourceLink.textContent = source;
        sourceLink.target = "_blank";
        sourceItem.append(sourceLink);
        sourcesList.append(sourceItem);
    });

    document.getElementById("source-list").append(title, sourcesList);
}

document.onkeypress = function (evt) {
    evt = evt || window.event;
    const charCode = evt.keyCode || evt.which;
    const charStr = String.fromCharCode(charCode).toLowerCase();
    if (charStr === "p") {
        window.location.href = 'resources/CV.pdf';
    }
};

window.onload = function () {
    var menu = document.getElementById('menu')
    var main = document.getElementById('main')

    document.getElementById("modal-close").addEventListener("click", closeModal)
    document.getElementById("modal-previous").addEventListener("click", previousModal)
    document.getElementById("modal-next").addEventListener("click", nextModal)
    document.getElementById("back-button").addEventListener("click", () => {
        closePanels()
        closeModal()
        document.getElementById("back-button").style.display = "none"
    })

    // Click event for menu
    for (let index = 0; index < menu.children.length; index++) {
        const element = menu.children[index]
        element.addEventListener("click", tooglePanel)
    }

    // EXPERIENCE PANELS
    var experiencePanel = document.getElementById("experience")
    var gridPanel = document.createElement("div")
    gridPanel.className = "gridPanel"

    data.experience.forEach(element => {
        var div = document.createElement("span")
        div.addEventListener("click", () => { populateModal(element) })
        div.className = "panel"

        var title = document.createElement("h3")
        title.textContent = element.year
        title.className = "year"

        var company = document.createElement("h3")
        company.textContent = element.company
        company.className = "company"


        var p = document.createElement("p")
        p.textContent = element.short_description
        p.className = "description"

        div.append(title)
        div.append(company)
        div.append(p)

        gridPanel.prepend(div)
    })
    experiencePanel.append(gridPanel)

    // Format side panels for border-radius
    var panels = document.getElementsByClassName("panel")
    for (let index = 0; index < panels.length; index++) {
        if (index % 3 == 2) {
            panels[index].className += " panel-right"
        }
        if (index % 3 == 0) {
            panels[index].className += " panel-left"
        }
    }

    // PROJECT PANELS
    var projectsPanel = document.getElementById("projects")

    data.projects.forEach(element => {
        var project_panel = document.createElement("div")
        project_panel.className = "project-panel"

        var title_area = document.createElement("div")
        title_area.className = "project-title"

        var title = document.createElement("h1")
        title.textContent = element.name
        var category = document.createElement("span")
        category.textContent = element.category

        title_area.append(title)
        title_area.append(category)

        var description_area = document.createElement("div")
        description_area.className = "project-description"
        description_area.textContent = element.description


        var links_area = document.createElement("div")
        links_area.className = "project-links"

        if (element.site != "") {
            var site_button = document.createElement("a")
            site_button.href = element.site
            var site_img = document.createElement("img")
            site_img.src = "./resources/external.png"
            site_button.target = "_blank"
            site_button.append(site_img)
            links_area.append(site_button)
        }

        if (element.github != "") {
            var github_button = document.createElement("a")
            github_button.href = element.github
            var github_img = document.createElement("img")
            github_img.src = "./resources/github.png"
            // github_button.style.backgroundImage = "url(../resources/github.png)";
            // github_button.textContent = element.github
            github_button.target = "_blank"
            github_button.append(github_img)
            links_area.append(github_button)
        }



        // project_panel.append(title)
        // project_panel.append(language)
        // project_panel.append(category)
        // project_panel.append(description_text)
        // project_panel.append(site_button)
        // project_panel.append(github_button)
        project_panel.append(title_area)
        project_panel.append(description_area)
        project_panel.append(links_area)
        projectsPanel.append(project_panel)
    })
}