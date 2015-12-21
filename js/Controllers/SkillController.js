app.controller("SkillController", ["$scope", function($scope){

	$scope.skills = [
		{
			name: "Java",
			level: 8,
			logo: "resources/skillLogos/JavaLogo.png",
			SubSkills: ["Threads", "Swing", "JavaMail", "Software Design Patterns"]
		},
		{
			name: "C",
			level: 8,
			logo: "resources/skillLogos/CLogo.png",
			SubSkills: ["Pointers","Makefiles","Threads", "POSIX","Semaphores", "Mutex", "Shared Memory", "Pipers", "Exec and Fork"]
		},
		{
			name: "Assembly",
			level: 5,
			logo: "resources/skillLogos/AssemblyLogo.png",
			SubSkills: ["Addressing", "Operands", "Flags", "Recursivity", "System Calls"]
		},
		{
			name: "C++",
			level: 4,
			logo: "resources/skillLogos/C++Logo.png",
			SubSkills: ["Containers", "Time Complexity", "Graphs", "Binary Search Tree", "AVL Tree", "Heaps"]
		},
		{
			name: "Web Design (HTML + CSS + JS)",
			level: 7,
			logo: "resources/skillLogos/HtmlLogo.png",
			SubSkills: ["JQuery", "Bootstrap", "AngularJS"]
		},
		{
			name: "General Computer Skills",
			level: 8,
			logo: "resources/skillLogos/ComputerLogo.png",
			SubSkills: ["Linux", "Windows", "Photoshop", "SublimeText"]
		}
	]


}]);