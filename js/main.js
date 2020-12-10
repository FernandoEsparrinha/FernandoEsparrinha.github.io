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
    clearModal()
    currentExperience = data.experience.indexOf(element)
    if (currentExperience == 0) {
        document.getElementById("modal-previous").style.display = "none"
    } else if (currentExperience == data.experience.length - 1) {
        document.getElementById("modal-next").style.display = "none"
    } else {
        document.getElementById("modal-next").style.display = "block"
        document.getElementById("modal-previous").style.display = "block"
    }

    // TITLE
    var header_company = document.createElement("h1")
    header_company.textContent = element.company

    var header_title = document.createElement("h2")
    header_title.textContent = element.title

    var date = document.createElement("h4")
    date.textContent = element.end_date + " - " + element.start_date
    document.getElementById("modal-date").append(date)
    document.getElementById("modal-job").append(header_company)
    document.getElementById("modal-job").append(header_title)

    // TAGS
    var tag_list = document.createElement("ul")
    element.skills.forEach(skill => {
        var tag = document.createElement("li")
        tag.textContent = skill
        tag_list.append(tag)
    });
    document.getElementById("modal-tags").append(tag_list)

    // DESCRIPTION
    var description = document.createElement("p")
    description.textContent = element.full_description
    document.getElementById("full-description").append(description)

    // PROJECTS
    if (Object.keys(element.projects).length != 0) {
        var p_title = document.createElement("h4")
        if (Object.keys(element.projects).length == 1) {
            p_title.textContent = "Project"
        } else {
            p_title.textContent = "Projects"
        }

        var project_list = document.createElement("ul")
        for (var title in element.projects) {
            var project_item = document.createElement("li")
            var project_title = document.createElement("span")
            project_title.textContent = title
            var project_connect = document.createElement("span")
            project_connect.innerHTML = "&succ;"
            var project_description = document.createElement("span")
            project_description.textContent = element.projects[title]

            project_item.append(project_title)
            project_item.append(project_connect)
            project_item.append(project_description)

            project_list.append(project_item)
        };
        document.getElementById("project-list").append(p_title)
        document.getElementById("project-list").append(project_list)
    }
    // SOURCES
    if (element.sources.length != 0) {
        var sources_list = document.createElement("ul")
        var s_title = document.createElement("h4")
        s_title.textContent = "Sources"

        var sources_list = document.createElement("ul")
        element.sources.forEach(source => {
            var source_li = document.createElement("li")
            var source_link = document.createElement("a")
            source_link.setAttribute("href", source)
            source_link.textContent = source
            source_link.target = "_blank"
            source_li.append(source_link)
            sources_list.append(source_li)
        });
        document.getElementById("source-list").append(s_title)
        document.getElementById("source-list").append(sources_list)
    }
    closePanels()
    document.getElementById("modal").style.display = "grid"

    // document.getElementById("defaultCanvas0").addEventListener("click", function (event) {
    //     document.getElementById("modal").style.display = "none"
    // })
}

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