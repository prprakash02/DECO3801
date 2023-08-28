import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('loginDB', 'root', 'Your_Password', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;
