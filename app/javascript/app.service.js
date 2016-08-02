(function() {
    'use strict';

    angular
    	.module('peopleAppService', ['restangular'])
    	.config(function(RestangularProvider) {
			RestangularProvider.setBaseUrl('https://f936127bda22d32ad3e6-d0f21c14a7f1d10fb3c540cc586d512a.ssl.cf3.rackcdn.com/');
			RestangularProvider.setRequestSuffix('.json');
		})
		.service('peopleAppService', function(Restangular){
			this.getPeople = function() {
				return Restangular.one("people").getList();
			};
		});
	})();