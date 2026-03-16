const pool = require("../config/db"); // apunta a tu archivo de conexión
const sql = require("mssql");

const RoleModel = {

    getAll: async () => {
        await pool.connect();

        const result = await pool.request()
            .query("SELECT * FROM Rol");

        return result.recordset;
    },

    create: async (role) => {
        return await pool.request()
            .input("nombre_rol", sql.VarChar, role.nombre_rol)
            .query(`
                INSERT INTO Rol (nombre_rol)
                VALUES (@nombre_rol)
            `);
    }

};

module.exports = RoleModel;