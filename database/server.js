exports.connect = () => {
    const Sequelize = require("sequelize");

    exports.sequelize = new Sequelize(
        'db_name',
        'DATABASE_USERNAME',
        'DATABASE_PASSWORD',
        {
            host: '127.0.0.1',
            dialect: 'mysql'
        }
    );


    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
    });
}