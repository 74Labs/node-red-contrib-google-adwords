# node-red-contrib-google-adwords

Node-RED node for Google AdWords API.

**Note about versioning**: This library is going to follow the Adwords Api and not
standard semvar.

## Work in Progress

Changes are coming.

## Features

This node is a wrapper for unofficial Google AdWords API SDK for Node.js: [node-adwords](https://github.com/ChrisAlvares/node-adwords).

## How to Install

Run the following command in the root directory of your Node-RED install

```
npm install node-red-contrib-google-adwords
```

or for a global installation
```
npm install -g node-red-contrib-google-adwords
```

## Configuration

1. Follow instructions at (https://developers.google.com/adwords/api/docs/guides/authentication) (stop at _Configuring your client library_ point).
2. Open info panel for your _google_adwords_ node.
3. Paste content of JSON key file that file into JSON Key field and fill in Service and Version (naming follows official reference (https://developers.google.com/adwords/api/docs/reference/))  
