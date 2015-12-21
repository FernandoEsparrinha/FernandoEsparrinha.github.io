app.directive('project', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      id: '=' 
    }, 
    templateUrl: 'js/directives/project.html' 
  }; 
});