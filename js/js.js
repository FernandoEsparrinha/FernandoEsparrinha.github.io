

function switchLanguage(language){
        
    if (language == 1){
        document.getElementById("skillsList").style.display = "list-item";
        document.getElementById("projectsList").style.display = "list-item";
        document.getElementById("contactsList").style.display = "list-item";
        document.getElementById("skillsClosed").style.display = "none";
        document.getElementById("projectsClosed").style.display = "none";
        document.getElementById("contactsClosed").style.display = "none";
        
        var en = document.getElementsByClassName("en");
            for(var i = 0; i < en.length; i++){
                 en[i].style.display = "none"; 
        }
        document.getElementById("enImg").style.border = "0";
        
        var pt = document.getElementsByClassName("pt");
            for(var i = 0; i < pt.length; i++){
                pt[i].style.display = "inline"; 
        }
        document.getElementById("ptImg").style.border = "2px solid white";

        var hk = document.getElementsByClassName("hk");
            for(var i = 0; i < hk.length; i++){
                hk[i].style.display = "none";  
        }
        document.getElementById("hkImg").style.border = "0";
    }

    if (language == 2 ) {
        var en = document.getElementsByClassName("en");
            for(var i = 0; i < en.length; i++){
                en[i].style.display = "none"; 
        }
        document.getElementById("enImg").style.border = "0";

        var pt = document.getElementsByClassName("pt");
            for(var i = 0; i < pt.length; i++){
                pt[i].style.display = "none"; 
        }
        document.getElementById("ptImg").style.border = "0";

        var hk = document.getElementsByClassName("hk");
            for(var i = 0; i < hk.length; i++){
                hk[i].style.display = "inline";  
        }
        document.getElementById("hkImg").style.border = "2px solid white";
    };

    if (language == 3 ) {
        document.getElementById("skillsList").style.display = "list-item";
        document.getElementById("projectsList").style.display = "list-item";
        document.getElementById("contactsList").style.display = "list-item";
        document.getElementById("skillsClosed").style.display = "none";
        document.getElementById("projectsClosed").style.display = "none";
        document.getElementById("contactsClosed").style.display = "none";

        var en = document.getElementsByClassName("en");
            for(var i = 0; i < en.length; i++){
                en[i].style.display = "inline"; 
        }
        document.getElementById("enImg").style.border = "2px solid white";

        var pt = document.getElementsByClassName("pt");
            for(var i = 0; i < pt.length; i++){
                pt[i].style.display = "none"; 
        }
        document.getElementById("ptImg").style.border = "0";

        var hk = document.getElementsByClassName("hk");
            for(var i = 0; i < hk.length; i++){
                hk[i].style.display = "none";  
        }
        document.getElementById("hkImg").style.border = "0";
    };
}


function switchState(state){
    if (state == 1 ){
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

    if(state == 2){
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

    if(state == 3){
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


