const Sequelize = require('sequelize');

const db= new Sequelize(
    'userdb',
    'userdb',
    'userdb',
    {
        dialect: "mysql",
        host:'localhost'
    }
)

const Users= db.define('Users',{
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull:true
    },
    name: Sequelize.STRING,
    email:Sequelize.STRING,
    roll: Sequelize.STRING,
    section: Sequelize.INTEGER


})

db.sync().then(()=> console.log("Database is ready"))

exports = module.exports={
    db,
    Users
}