module.exports = function (RED) {

    "use strict";

    const AdwordsUser = require('node-adwords').AdwordsUser;

    function GoogleAdWordsNode(config) {

        RED.nodes.createNode(this, config);
        var node = this;
        node.developerToken = config.developerToken;
        node.clientCustomerId = config.clientCustomerId,
        node.clientId = config.clientId,
        node.clientSecret = config.clientSecret,
        node.refreshToken = config.refreshToken,
        node.service = config.service;
        node.version = config.version;

        node.on('input', function (msg) {

            node.status({
                fill: 'blue',
                shape: 'dot',
                text: 'pending'
            });

            var user = new AdwordsUser({
                developerToken: node.developerToken,
                // userAgent: 'COMPANY_NAME',
                clientCustomerId: node.clientCustomerId,
                client_id: node.clientId,
                client_secret: node.clientSecret,
                refresh_token: node.refreshToken
                // access_token: 'ACCESS_TOKEN',
                // debug: true
            });

            var service = user.getService(node.service, node.version);

            service.get({
                serviceSelector: msg.payload
            }, function (err, res) {

                if (err) {
                    node.status({
                        fill: 'red',
                        shape: 'dot',
                        text: 'error'
                    });
                    node.error(err);
                    return;
                }

                node.status({
                    fill: 'yellow',
                    shape: 'dot',
                    text: 'success'
                });

                msg.payload = res;
                node.send(msg);
            });

        });
    }

    RED.nodes.registerType("google-adwords", GoogleAdWordsNode);

};
