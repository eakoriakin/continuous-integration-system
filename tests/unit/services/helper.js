describe('app.services', function () {
    var helper;

    beforeEach(module('app.services'));

    beforeEach(inject(function (_helper_) {
        helper = _helper_;
    }));

    describe('isDate method', function () {
        it('should indicate whether a specified value is a date', function () {
            expect(helper.isDate(new Date())).toEqual(true);
            expect(helper.isDate(new Date('invalid'))).toEqual(false);
            expect(helper.isDate('Mon Aug 24 2015 10:42:31 GMT+0700 (N. Central Asia Daylight Time)')).toEqual(false);
            expect(helper.isDate('2015-02-21')).toEqual(false);
            expect(helper.isDate('Simple string')).toEqual(false);
            expect(helper.isDate('')).toEqual(false);
            expect(helper.isDate(2015)).toEqual(false);
            expect(helper.isDate([])).toEqual(false);
            expect(helper.isDate([10, 20, 30])).toEqual(false);
            expect(helper.isDate({})).toEqual(false);
            expect(helper.isDate({ name: 'Data' })).toEqual(false);
            expect(helper.isDate(true)).toEqual(false);
            expect(helper.isDate(false)).toEqual(false);
            expect(helper.isDate(null)).toEqual(false);
            expect(helper.isDate(undefined)).toEqual(false);
            expect(helper.isDate(NaN)).toEqual(false);
        });
    });

    describe('formatTime method', function () {
        it('should convert seconds to h.mm format', function () {
            expect(helper.formatTime(16200)).toEqual('4.30');
        });
    });
});