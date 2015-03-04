


function switchLanguage(language){
        //Mudanca de linguagem
        //1- PT 
        //2- EN 
        //3- HK

    var skillsList = document.getElementById("skillsList");
    var projectsList = document.getElementById("projectsList");
    var contactsList = document.getElementById("contactsList");
    var skillsClosed = document.getElementById("skillsClosed");
    var projectsClosed = document.getElementById("projectsClosed");
    var contactsClosed = document.getElementById("contactsClosed");
    var pt = document.getElementsByClassName("pt");
    var en = document.getElementsByClassName("en");
    var hk = document.getElementsByClassName("hk");

    if (language == 1){
        //Portugues
        skillsList.style.display = "list-item";
        projectsList.style.display = "list-item";
        contactsList.style.display = "list-item";
        skillsClosed.style.display = "none";
        projectsClosed.style.display = "none";
        contactsClosed.style.display = "none";
        

        for(var i = 0; i < pt.length; i++){
            pt[i].style.display = "inline"; 
        }
        
        for(var i = 0; i < en.length; i++){
            en[i].style.display = "none"; 
        }

        for(var i = 0; i < hk.length; i++){
            hk[i].style.display = "none";  
        }

        document.getElementById("ptImg").style.border = "2px solid white";
        document.getElementById("enImg").style.border = "0";
        document.getElementById("hkImg").style.border = "0";
    }

    if (language == 2 ) {
        //Ingles
        skillsList.style.display = "list-item";
        projectsList.style.display = "list-item";
        contactsList.style.display = "list-item";
        skillsClosed.style.display = "none";
        projectsClosed.style.display = "none";
        contactsClosed.style.display = "none";


        for(var i = 0; i < pt.length; i++){
            pt[i].style.display = "none"; 
        }

        for(var i = 0; i < en.length; i++){
            en[i].style.display = "inline"; 
        }

        for(var i = 0; i < hk.length; i++){
            hk[i].style.display = "none";  
        }

        document.getElementById("ptImg").style.border = "0";
        document.getElementById("enImg").style.border = "2px solid white";
        document.getElementById("hkImg").style.border = "0";
    };

    if (language == 3 ) {
        //Hacker
        for(var i = 0; i < pt.length; i++){
            pt[i].style.display = "none"; 
        }

        for(var i = 0; i < en.length; i++){
            en[i].style.display = "none"; 
        }

        for(var i = 0; i < hk.length; i++){
            hk[i].style.display = "inline";  
        }

        document.getElementById("ptImg").style.border = "0";
        document.getElementById("enImg").style.border = "0";
        document.getElementById("hkImg").style.border = "2px solid white";
    };

    
}


function openBrackets(state){
    
    if(state==1){
        list = document.getElementById("skillsList");
        close = document.getElementById("skillsClosed");
        if(list.style.display == "list-item"){
            list.style.display = "none";
            close.style.display = "inline";
        } else {
            list.style.display = "list-item";
            close.style.display = "none";
        }
    }

    if(state==2){
        list = document.getElementById("projectsList");
        close = document.getElementById("projectsClosed");
        if(list.style.display == "list-item"){
            list.style.display = "none";
            close.style.display = "inline";
        } else {
            list.style.display = "list-item";
            close.style.display = "none";
        }
    }

    if(state==3){
        list = document.getElementById("contactsList");
        close = document.getElementById("contactsClosed");
        if(list.style.display == "list-item"){
            list.style.display = "none";
            close.style.display = "inline";
        } else {
            list.style.display = "list-item";
            close.style.display = "none";
        }
    }
}

function switchActiveProject(projectID){
    var projectList = document.getElementsByClassName("projectInfo");
    for(var i=0; i < projectList.length; i++){
        projectList[i].style.display = "none";
    }

    var bio = document.getElementById("bioPanel");
    bio.style.display = "none";

    var project = document.getElementById(projectID);
    project.style.display = "inline";
}

