describe('Templates', function(){ //describe your 
    var element, $scope;

    beforeEach(module('peopleAppDirective'));
    beforeEach(module('templates/people-list.html', 'templates/people-list.html'));
    beforeEach(inject(function ($compile, $rootScope){
        scope = $rootScope.$new();
        element = angular.element('<people-list></people-list>');
        $compile(element)(scope);
        scope = element.scope();

        return scope.$apply();
    }));

    it('Should load the template', inject(function($compile) {
        var result = angular.element(element[0]).hasClass('ng-scope');
        expect(result).toBe(true);
    }));
});