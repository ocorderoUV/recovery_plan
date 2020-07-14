'use strict';

var server = require('server');
var Logger = require('dw/system/Logger');

var debugLog = Logger.getLogger("debug-test-oacv", "oscarDebug");
debugLog.debug("This is the first category a debug");

var infoLog = Logger.getLogger("info-test-oacv", "oscarInfo");
infoLog.info("This is the first category a info");

var warnLog = Logger.getLogger("warn-test-oacv", "oscarWarn");
warnLog.warn("This is the first category a warn");

var errorLog = Logger.getLogger("error-test-oacv", "oscarError");
errorLog.error("This is the first category a error");

var logger = Logger.getLogger("loggerFile", "category1.eu");
logger.warn("This is a log message");

server.get('Show', function(req, res, next) {
    res.render('/exercises/logOscar', {
        debug: logger
    });

    next();
});

module.exports = server.exports();