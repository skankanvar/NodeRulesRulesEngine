(function (autoAuthHandler) {
    var data = require("../Repositories");
    var ruleEngine = require('node-rules');

    var validate = function (req) {
        var r = new Array();
        data.Rules.forEach(function (element) {
            var s = "";
            if (element.AuthTypeId)
                s = s + "this.AuthTypeId === element.AuthTypeId";
            if (element.ClientId)
                s = s + "&& this.ClientId === element.ClientId";
            if (element.LobId)
                s = s + "&& this.LobId === element.LobId";
            if (element.ProcedureCode)
                s = s + "&& this.ProcedureCode === element.ProcedureCode";
            if (element.DiagnosisCode)
                s = s + "&& this.DiagnosisCode === element.DiagnosisCode";
            if (element.ProviderType)
                s = s + "&& this.ProviderType === element.ProviderType";
            if (element.PlaceOfService)
                s = s + "&& this.PlaceOfService === element.PlaceOfService";
            if (element.IsInNetwork)
                s = s + "&& this.IsInNetwork === element.IsInNetwork";
            if (element.NPI)
                s = s + "&& this.NPI === element.NPI";
            if (element.ReviewType)
                s = s + "&& this.ReviewType === element.ReviewType";
            var rule = {
                "name": element.Name,
                "priority": element.Priority,
                "on": element.IsActive,
                "condition": function (R) {
                    R.when(eval(s));
                },
                "consequence": function (R) {
                    this.approved = true;
                    this.ruleName = element.Name;
                    R.stop();
                }
            }
            r.push(rule);
        });

        var rules = r;

        var request = {
            "ClientId": req.clientId,
            "LobId": req.lobId,
            "AuthTypeId": req.authTypeId,
             "ProcedureCode": req.procedureCode,
            "DiagnosisCode": req.diagnosisCode,
            "NPI": req.NPI,
            "IsInNetwork": req.isInNetwork,
            "ProviderType": req.providerType
        };

        //Initializing the rule engine
        var R = new ruleEngine(rules);
        var promise = new Promise((resolve, reject) => {
            //Executing the Rules
            var x = R.execute(request, function (result) {
                if (result.approved) {
                    request.response = "Eligible for Auto Approval Decision with " + result.ruleName;
                } else {
                    request.response = "Manual Process";
                }
                resolve(request.response);
                console.log(request.response);
            });
        });
        return promise;
    }

    autoAuthHandler.init = function (req) {
        var result = validate(req.body);
        console.log(result + "from init");
        return result;
    }

    
})(module.exports);