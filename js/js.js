function replaceClass(elt, oldClass, newClass) {
    var oldRE = RegExp('\\b'+oldClass+'\\b');
    elt.className = elt.className.replace(oldRE, newClass);
}
function toggle(elt, on, off) {
    var onRE = RegExp('\\b'+on+'\\b');
    if (onRE.test(elt.className)) {
        elt.className = elt.className.replace(onRE, off);
        var hacks = document.getElementsByClassName("langHack");
        for(var i = 0; i < hacks.length; i++){
        	hacks[i].style.display = "none";	
        }

        var noob = document.getElementsByClassName("langNoob");
        for(var i = 0; i < noob.length; i++){
        	noob[i].style.display = "inline";	
        }
        
    } else {
        replaceClass(elt, off, on);
        var noob = document.getElementsByClassName("langNoob");
        for(var i = 0; i < noob.length; i++){
        	noob[i].style.display = "none";	
        }

        var hacks = document.getElementsByClassName("langHack");
        for(var i = 0; i < hacks.length; i++){
        	hacks[i].style.display = "inline";	
        }

    }
}

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