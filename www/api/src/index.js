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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Event', 'model/EventsResponse', 'api/EventsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Event'), require('./model/EventsResponse'), require('./api/EventsApi'));
  }
}(function(ApiClient, Event, EventsResponse, EventsApi) {
  'use strict';

  /**
   * API_for_accessing_published_Events_on_the_melbournecocoaheads_com_website.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var MelbourneCocoaHeads = require('index'); // See note below*.
   * var xxxSvc = new MelbourneCocoaHeads.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new MelbourneCocoaHeads.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new MelbourneCocoaHeads.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new MelbourneCocoaHeads.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event: Event,
    /**
     * The EventsResponse model constructor.
     * @property {module:model/EventsResponse}
     */
    EventsResponse: EventsResponse,
    /**
     * The EventsApi service constructor.
     * @property {module:api/EventsApi}
     */
    EventsApi: EventsApi
  };

  return exports;
}));
