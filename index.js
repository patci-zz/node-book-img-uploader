var server = require(__dirname + '/lib/server');
var router = require(__dirname + '/lib/router');
var requestHandlers = require(__dirname + '/lib/request_handlers');

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);
