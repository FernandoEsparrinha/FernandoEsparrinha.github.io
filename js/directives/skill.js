app.directive('skill', function(){
	return {
		restrict: 'E',
		scope: {
			id: '='
		},
		templateUrl: 'js/directives/skill.html'
	};
});