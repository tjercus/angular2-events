import {expect, it, describe} from "angular2/test";
import {EventManagerService} from './EventManagerService';

describe('EventManagerService', function() {
  describe('#subscribe()', function () {
    //it('should not register a subscription twice', function () {
    //  var service = new EventManagerService();
    //
    //  var nr1 = service.subscribe("blah", function() {});
    //  var nr2 = service.subscribe("blah", function() {});
    //
    //  assert.equal(1, nr1);
    //});
    it('should register subscriptions', function () {
      var service = new EventManagerService();

      var nr1 = service.subscribe("blah", function() {});
      var nr2 = service.subscribe("blah2", function() {});

      expect(nr1).toEqual(1);
      expect(nr2).toEqual(2);
    });
  });
});

