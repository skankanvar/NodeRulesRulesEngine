(function (rulesRepository) {
    rulesRepository.Rules = [
        {
            "Name": "ProcedureRule",
            "Priority": 5,
            "IsActive": true,
            "ClientId": 10,
            "LobId": 71,
            "AuthTypeId": 2,
            "ProcedureCode": "P0001"
        },
        {
            "Name": "DiagnosisRule",
            "Priority": 10,
            "IsActive": true,
            "ClientId": 10,
            "LobId": 71,
            "AuthTypeId": 2,
            "DiagnosisCode": "D0001"

        },
        {
            "Name": "PlaceOfServiceRule",
            "Priority": 6,
            "IsActive": true,
            "ClientId": 10,
            "LobId": 71,
            "AuthTypeId": 2,
            "PlaceOfService": "Hospital"

        },
        {
            "Name": "RequestingProviderRule",
            "Priority": 7,
            "IsActive": true,
            "ClientId": 10,
            "LobId": 71,
            "AuthTypeId": 2,
            "NPI": "NPI0001",
            "IsInNetwork": true,
            "ProviderType": 1
        },
        {
            "Name": "RenderingProviderRule",
            "Priority": 7,
            "IsActive": true,
            "ClientId": 10,
            "LobId": 71,
            "AuthTypeId": 2,
            "NPI": "NPI0002",
            "IsInNetwork": true,
            "ProviderType":2
        },
        {
            "Name": "FacilityVendorRule",
            "Priority": 7,
            "IsActive": true,
            "ClientId": 10,
            "LobId": 71,
            "AuthTypeId": 2,
            "NPI": "NPI0003",
            "IsInNetwork": true,
            "ProviderType": 3
        },
        {
            "Name": "AttendingProviderRule",
            "Priority": 7,
            "IsActive": true,
            "ClientId": 10,
            "LobId": 71,
            "AuthTypeId": 2,
            "NPI": "NPI0004",
            "IsInNetwork": true,
            "ProviderType": 4
        },
        {
            "Name": "ReviewTypeRule",
            "Priority": 4,
            "IsActive": true,
            "ClientId": 10,
            "LobId": 71,
            "AuthTypeId": 2,
            "ReviewType": "Initial"
        }
    ];    
})(module.exports);