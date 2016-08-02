(function() {
    'use strict';
    angular
		.module('peopleAppDirective',[])
		.directive('peopleList', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/people-list.html'
		};
	});
})();