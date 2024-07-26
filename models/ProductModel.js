import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Product = db.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.STRING,
    description2: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Product;

(async () => {
    await db.sync();
})();
