(function() {
    'use strict';

    angular
		.module('peopleAppFilter', [])
		.filter('formatDate', function formatDate($filter){
			return function(text){
				var tempDate = text.split('T');
				return $filter('date')(tempDate[0], "dd MMM yyyy");
			};
		});
})();