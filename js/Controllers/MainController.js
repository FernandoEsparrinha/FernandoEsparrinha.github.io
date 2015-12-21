app.controller("MainController", ["$scope", function($scope){
	$scope.name = "Fernando Pinto";
	$scope.title = "Informatic Engineer Student";

	$scope.contacts = [
		{
			name: "Github",
			link: "https://github.com/FernandoPinto",
			icon: "resources/github.png"
		},
		{
			name: "BitBucket",
			link: "https://bitbucket.org/FernandoPinto",
			icon: "resources/bitbucket.png"
		},
		{
			name: "LinkedIn",
			link: "https://www.linkedin.com/in/fernandoesparrinha",
			icon: "resources/linkedin.png"
		},
		{
			name: "Email",
			link: "mailto:fernando.esparrinha@gmail.com",
			icon: "resources/mail.png"
		}
	]

	$scope.projects = [
		{
			language: "Java",
			name: "JWallet",
			category: "Wallet Management",
			info: "JWallet is a application where you can create and manage your virtual wallet.",
			pic: "resources/projectsScreen/jwalletScreen.png",
			link: "https://github.com/FernandoPinto/JWallet",
			state: "Partially completed"
		},
		{
			language: "Java",
			name: "Soundanoid",
			category: "Game",
			info: "Soundanoid is a Arkanoid clone but as the user is playing a song is being created.",
			pic: "resources/projectsScreen/soundanoidScreen.png",
			link: "https://github.com/FernandoPinto/Soundanoid",
			state: "Buggy"
		},
		{
			language: "Web Design (HTML + CSS + JS)",
			name: "Republic of Developers",
			category: "Social platform",
			info: "Republic of Developers is the place where you can learn and discuse programming related topics.",
			pic: "resources/projectsScreen/rodScreen.png",
			link: "https://github.com/danfergo/RepublicOfDevelopers",
			state: "In development"
		},
		{
			language: "Web Design (HTML + CSS + JS)",
			name: "+InfoPorto",
			category: "Turism App",
			info: "+InfoPorto is an application that won the 2nd place in Porto Summer of Code '14. The app reads QR codes and NFC tags that are located in key places of the city.",
			pic: "resources/projectsScreen/infoportoScreen.png",
			link: "http://www.portosummerofcode.com/pt/psc14",
			state: "Discontinued"
		},
		{
			language: "Web Design (HTML + CSS + JS)",
			name: "PlanIt",
			category: "Planning App",
			info: "",
			pic: "resources/projectsScreen/planitScreen.jpg",
			link: "http://www.portosummerofcode.com",
			state: "Discontinued"
		}
	]

}]);