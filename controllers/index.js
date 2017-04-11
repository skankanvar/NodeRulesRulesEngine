(function(controllers) {
    var autoAuthDecisionValidationController = require("./autoAuthDecisionValidationController");
    controllers.init = function(app) {
        autoAuthDecisionValidationController.init(app);
    }
})(module.exports);