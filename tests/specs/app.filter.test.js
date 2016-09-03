describe('Filters', function(){ //describe your object type
    var formatDate;

    beforeEach(module('peopleAppFilter')); //load module
        
    beforeEach(inject(function($filter){ //initialize your filter
        formatDate = $filter('formatDate',{});
    }));
    
    it('Should format a string', function(){  //write tests
        expect(formatDate('2014-08-15T11:34:51 -01:00')).toBe('15 Aug 2014'); //pass
        expect(formatDate('2015-04-19T05:14:37 -01:00')).toBe('19 Apr 2015'); //pass
        expect(formatDate('2014-01-09T06:44:29 -00:00')).toBe('09 Jan 2014'); //pass
        expect(formatDate('2014-04-16T08:49:21 -01:00')).toBe('16 Apr 2014'); //pass

        //expect(formatDate('2014-04-16T08:49:21 -01:00')).toBe('06 Apr 2014'); //fail
    });

});