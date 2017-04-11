(function (handlers) {
    var autoAuthHandler = require("./autoAuthHandler");
    handlers.Decision = function (req) {
        //autoAuthHandler.init(req);
       var result = autoAuthHandler.init(req);
       return result;
    };
})(module.exports);