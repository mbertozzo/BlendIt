/**
 * Melbourne CocoaHeads
 * API for accessing published Events on the melbournecocoaheads.com website 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: jesse@melbournecocoaheads.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MelbourneCocoaHeads);
  }
}(this, function(expect, MelbourneCocoaHeads) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MelbourneCocoaHeads.Event();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Event', function() {
    it('should create an instance of Event', function() {
      // uncomment below and update the code to test Event
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be.a(MelbourneCocoaHeads.Event);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be();
    });

    it('should have the property addressDisplay (base name: "address_display")', function() {
      // uncomment below and update the code to test the property addressDisplay
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be();
    });

    it('should have the property contact (base name: "contact")', function() {
      // uncomment below and update the code to test the property contact
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be();
    });

    it('should have the property contactName (base name: "contact_name")', function() {
      // uncomment below and update the code to test the property contactName
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be();
    });

    it('should have the property endsAt (base name: "ends_at")', function() {
      // uncomment below and update the code to test the property endsAt
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be();
    });

    it('should have the property eventType (base name: "event_type")', function() {
      // uncomment below and update the code to test the property eventType
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be();
    });

    it('should have the property lat (base name: "lat")', function() {
      // uncomment below and update the code to test the property lat
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be();
    });

    it('should have the property lng (base name: "lng")', function() {
      // uncomment below and update the code to test the property lng
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be();
    });

    it('should have the property locationLink (base name: "location_link")', function() {
      // uncomment below and update the code to test the property locationLink
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be();
    });

    it('should have the property startsAt (base name: "starts_at")', function() {
      // uncomment below and update the code to test the property startsAt
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be();
    });

    it('should have the property subtitle (base name: "subtitle")', function() {
      // uncomment below and update the code to test the property subtitle
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be();
    });

    it('should have the property tickets (base name: "tickets")', function() {
      // uncomment below and update the code to test the property tickets
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new MelbourneCocoaHeads.Event();
      //expect(instance).to.be();
    });

  });

}));