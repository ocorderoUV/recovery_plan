'use strict';
var server = require('server');
server.extend(module.superModule);

//var num = require('../scripts/Data').numero();

server.prepend('Show', function(req, res, next) {
    var viewData = res.getViewData();
    viewData.param1 = { test: 'prepend' };
    res.setViewData(viewData);
    next();
});

server.append('Show', function(req, res, next) {
    var viewData = res.getViewData();
    viewData.param2 = { test: 'append' };
    res.setViewData(viewData);
    next();
});

/* Replace Method for call to template of HomePage*/

/*server.replace('Show', function(req, res, next) {
    var viewData = res.getViewData();
    viewData.param3 = { numero: num };
    res.setViewData(viewData);
    res.render('/home/homePage');
    next();
});
*/
module.exports = server.exports();