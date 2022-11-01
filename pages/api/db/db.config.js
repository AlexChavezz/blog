const Config = {
    server: process.env['SERVER'],
    authentication: {
        type: 'default',
        options: {
            userName: process.env['USER_NAME'],
            password: process.env['PASSWORD']
        }
    },
    options: {
        encrypt: true,
        database: process.env['DATABASE'],
    }
}


module.exports = Config;