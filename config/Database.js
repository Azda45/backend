import { Sequelize } from "sequelize";

const db = new Sequelize('defaultdb', 'avnadmin', 'AVNS_lZq8BPbCIbuq_zPDjnb', {
    host: 'mysql-2173c024-azdabtc1-91b7.l.aivencloud.com',
    dialect: "mysql",
    port:10844
});

export default db;
