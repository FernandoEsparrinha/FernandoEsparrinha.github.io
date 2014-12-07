

function switchLanguage(language){
        
    if (language == 1){
        var en = document.getElementsByClassName("en");
            for(var i = 0; i < en.length; i++){
                 en[i].style.display = "none"; 
        }

        var pt = document.getElementsByClassName("pt");
            for(var i = 0; i < pt.length; i++){
                pt[i].style.display = "inline"; 
        }

        var hk = document.getElementsByClassName("hk");
            for(var i = 0; i < hk.length; i++){
                hk[i].style.display = "none";  
        }
    }

    if (language == 2 ) {
        var en = document.getElementsByClassName("en");
            for(var i = 0; i < en.length; i++){
                en[i].style.display = "none"; 
        }

        var pt = document.getElementsByClassName("pt");
            for(var i = 0; i < pt.length; i++){
                pt[i].style.display = "none"; 
        }

        var hk = document.getElementsByClassName("hk");
            for(var i = 0; i < hk.length; i++){
                hk[i].style.display = "inline";  
        }
    };

    if (language == 3 ) {
        var en = document.getElementsByClassName("en");
            for(var i = 0; i < en.length; i++){
                en[i].style.display = "inline"; 
        }

        var pt = document.getElementsByClassName("pt");
            for(var i = 0; i < pt.length; i++){
                pt[i].style.display = "none"; 
        }

        var hk = document.getElementsByClassName("hk");
            for(var i = 0; i < hk.length; i++){
                hk[i].style.display = "none";  
        }
    };
}