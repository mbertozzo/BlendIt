# MelbourneCocoaHeads.EventsApi

All URIs are relative to *https://melbournecocoaheads.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEvents**](EventsApi.md#getEvents) | **GET** /events | 


<a name="getEvents"></a>
# **getEvents**
> EventsResponse getEvents()



Returns all published, upcoming events.

### Example
```javascript
var MelbourneCocoaHeads = require('melbourne_cocoa_heads');

var apiInstance = new MelbourneCocoaHeads.EventsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEvents(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**EventsResponse**](EventsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

