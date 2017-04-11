var sql = require('mssql');

// config for your database
var config = {
    server: 'localhost',
    database: 'UtilizationMgmt',
    user: 'sa',
    password: 'Asdfgh@1234'
};

// connect to your database
sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query('select * from UMRef.AuthType', function (err, recordset) {

        if (err) console.log(err);

        // send records as a response
        console.log(recordset);

    });
});