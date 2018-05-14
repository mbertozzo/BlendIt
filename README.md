# BlendIt App

**BlendIt** is an app aiming to help people find gourmet recipes with a search engine that provides results based on the ingredients available in the fridge.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Please note that you'll need a machine with Node.js (project tested with v. 8.9.0 and higher) and Cordova (to install Cordova via NPM, please refer to [this page](https://www.npmjs.com/package/cordova)). To build for smartphones you may need to install some SDKs.

### Set-up

Clone this repo and install the dependencies with the command

```
npm install
```

To test the app in the browser add the Cordova platform with the command

```
cordova platform add browser
```

and then run it with

```
cordova run browser
```

or deploy for smartphones adding the desired platform and launching the command

```
cordova build android   [or the platform you've chosen]
```