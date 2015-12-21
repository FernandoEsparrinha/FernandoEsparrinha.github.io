var state;

$(document).ready(function(){
	state = "mainView";
	$("#educationImage").click(activateEducation);

	$("#personalImage").click(activatePersonal);

	$("#professionalAreaImage").click(activateProfessionalArea);

	$("#cyclingImage").click(activateCycling);

	$("#projectsImage").click(activateProjects);

	$("#gamingImage").click(activateGaming);

	$("#musicImage").click(activateMusic);

	$("#homeButton").click(activateMain);

})


var activateEducation = function(){
	$("#skillsArea div:visible").fadeOut(500, function(){
		$("#educationView div:hidden").fadeIn(500);
		$("#educationView").fadeIn(500);
		state = "educationView";
		updateHomeButton();
	});
};

var activatePersonal = function(){
	$("#skillsArea div:visible").fadeOut(500, function(){
		$("#personalView div:hidden").fadeIn(500);
		$("#personalView").fadeIn(500);
		state = "personalView";
		updateHomeButton();
	});
};

var activateProfessionalArea = function(){
	$("#skillsArea div:visible").fadeOut(500, function(){
		$("#professionalAreaView div:hidden").fadeIn(500);
		$("#professionalAreaView").fadeIn(500);
		state = "professionalAreaView";
		updateHomeButton();

		$(".programmingSkill").each(function(){
			if(!($(this).find(".projectItem").length)){
				$(this).find("div:nth-child(2) div:nth-child(2)").html("No projects yet ..");
			}
		});
	});
};

var activateCycling = function(){
	$("#skillsArea div:visible").fadeOut(500, function(){
		$("#cyclingView div:hidden").fadeIn(500);
		$("#cyclingView").fadeIn(500);
		state = "cyclingView";
		updateHomeButton();
	});
};

var activateGaming = function(){
	$("#skillsArea div:visible").fadeOut(500, function(){
		$("#gamingView div:hidden").fadeIn(500);
		$("#gamingView").fadeIn(500);
		state = "gamingView";
		updateHomeButton();
	});
};

var activateMusic = function(){
	$("#skillsArea div:visible").fadeOut(500, function(){
		$("#musicView div:hidden").fadeIn(500);
		$("#musicView").fadeIn(500);
		state = "musicView";
		updateHomeButton();
	});
	$("#musicView").append("<audio controls autoplay><source src='resources/mpb.mp3' type='audio/mpeg'></audio>")
};

var activateProjects = function(){
	$("#skillsArea div:visible").fadeOut(500, function(){
		$("#projectView div:hidden").fadeIn(500);
		$("#projectView").fadeIn(500);
		$("audio").remove();
		state = "projectView";
		updateHomeButton();
	});
};

var activateMain = function(){
	if(!(state == "mainView")){
		$("#skillsArea div:visible").fadeOut(500, function(){
			$("#mainView div:hidden").fadeIn(500);
			$("#mainView").fadeIn(500);
			$("audio").remove();
			state = "mainView";
			updateHomeButton();
		});
	};
};


var updateHomeButton = function(){
	if(state == "mainView"){
	//	$("#homeButton").fadeOut(500);
		$("#homeButton").removeClass("btn-success").addClass("btn-danger");
	} else {
	//	$("#homeButton").fadeIn(500);
		$("#homeButton").removeClass("btn-danger").addClass("btn-success");
	}
};