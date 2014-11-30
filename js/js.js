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