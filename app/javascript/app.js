(function(){
    'use strict';

	angular
		.module('peopleApp', [
			'peopleAppFilter', 
			'peopleAppService', 
			'peopleAppController',
			'peopleAppDirective'
		]);
		
}());