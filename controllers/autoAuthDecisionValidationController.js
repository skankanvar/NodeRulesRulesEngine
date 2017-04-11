(function (autoAuthDecisionValidationController) {
    var handler = require("../Handlers");
    autoAuthDecisionValidationController.init = function(app) {
        app.post("/AutoAuthDecisionValidate", function (req, res) {
            //console.log(req.body);
            handler.Decision(req).then(function (data) {
                res.send({output : data});
            });
        });
    }
})(module.exports);