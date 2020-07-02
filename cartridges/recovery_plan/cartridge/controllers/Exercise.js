'use strict';

var server = require('server');
var Logger = require('dw/system/Logger');

var debugLog = Logger.getLogger("debugOscar", "oscarDebug");
debugLog.debug("This is the first category a debug");


server.get('Show', function(req, res, next) {
    res.render('/exercises/logOscar', {
        debug: debugLog
    });

    next();
});

module.exports = server.exports();