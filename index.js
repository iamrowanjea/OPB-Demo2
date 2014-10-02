/**
 * Created by r_macleod on 01/10/2014.
 */

var server = require("./server");
var router = require("./router");

server.start(router.route);