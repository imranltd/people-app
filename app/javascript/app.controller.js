(function() {
    'use strict';

	angular
		.module('peopleAppController', ['peopleAppService'])
		.controller('peopleController', peopleController);

	function peopleController(peopleAppService, $scope){
		peopleAppService.getPeople().then(function(data){
			$scope.items = data.plain();
		});
	}
})();