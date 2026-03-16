const pool = require("../config/db");
const sql = require("mssql");

const CategoryModel = {

    getAll: async () => {

        await pool.connect();

        const result = await pool.request()
            .query("SELECT * FROM Categoria");

        return result.recordset;
    },

    create: async (category) => {

        return await pool.request()
            .input("nombre", sql.VarChar, category.nombre_categoria)
            .query(`
                INSERT INTO Categoria(nombre_categoria)
                VALUES(@nombre)
            `);
    }

};

module.exports = CategoryModel;