import Config from './db/db.config';

require('dotenv').config();
// const connection = require('./db/connection');
const { Request, Connection } = require('tedious');


export default (req, res) => {
    const method = req.method;
    const connection = new Connection(Config);
    if (method === 'POST') {
        const { name, email } = req.body;
        connection.on("connect", error => {
            if (error) {
                connection.close();
                return res.status(500).json({
                    mesagge: "Internal server ERROR"
                });
            }
            let status = execSqlWithArguments(name, email);
            if (status['isError']) {
                connection.close();
                return res.status(500).json({ message: status['message'] });
            }
            connection.execSql(status['request']);
        });
    } else {
        res.status(200).json({ method, name: process.env['name'] })
    }
}

// We need to recive all arguments in a lliteral object  = { }

function execSqlWithArguments(name, email) {
    let argumentsState = {
        isError: false,
        message: "",
        request: null
    };
    argumentsState['request'] = new Request("INSERT INTO dbo.users (name, email) VALUES (@name, @email)", (error, rowCount) => {
        if (error) {
            argumentsState['message'] = "Internal server Error"
        }
    });
    argumentsState['request'].addParameter('name', TYPES.VarChar, name);
    argumentsState['request'].addParameter('email', TYPES.VarChar, email);
    return argumentsState;
}

// function saveUser(res) {
//     // connection.on('connect', (error) => {
        //     if (error) {
        //         connection.close();
        //         return res.status(500).json({ msg: 'Internal server Error 1', server: process.env['SERVER'], password: process.env['PASSWORD'], database: process.env['DATABASE'], user: process.env['USER_NAME'] });
        //     }
        //     const request = new Request('SELECT * FROM Followers;', (error, rowCount, rows) => {
        //         if (error) {
        //             connection.close();
        //             return res.status(500).json({ msg: 'Internal server Error 2 ', server: process.env['SERVER'], password: process.env['PASSWORD'], database: process.env['DATABASE'], user: process.env['USER_NAME'] });
        //         }
        //     });
        //     let followers = [];
        //     let currentFollower = {};
        //     request.on('row', (columns) => {
        //         columns.forEach(column => {
        //             currentFollower[column.metadata.colName] = column.value;
        //         });
        //         followers = [...followers, currentFollower];
        //         currentFollower = {};
        //     });
        //     request.on("requestCompleted", function () {
        //         connection.close();
        //         return res.status(200).json(followers);
        //     })

        //     connection.execSql(request);
        // });
        // connection.connect();
// }