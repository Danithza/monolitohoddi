const pool = require("../config/db");
const sql = require("mssql");

const UserModel = {
    create: async (user) => {
        await pool.connect();

        return await pool.request()
            .input("nombre", sql.VarChar, user.nombre)
            .input("apellido", sql.VarChar, user.apellido)
            .input("correo", sql.VarChar, user.correo)
            .input("password", sql.VarChar, user.password)
            .input("telefono", sql.VarChar, user.telefono || null)
            .input("tipo_documento", sql.VarChar, user.tipo_documento)
            .input("numero_documento", sql.VarChar, user.numero_documento)
            .input("fecha_nacimiento", sql.Date, user.fecha_nacimiento)
            .input("direccion", sql.VarChar, user.direccion)
            .input("ciudad", sql.VarChar, user.ciudad)
            .input("foto_perfil", sql.VarChar, user.foto_perfil || null)
            .input("estado_cuenta", sql.VarChar, user.estado_cuenta || "Activo")
            .input("id_rol", sql.Int, user.id_rol)
            .query(`
                INSERT INTO Usuario
                (nombre, apellido, correo, password, telefono, tipo_documento, numero_documento, fecha_nacimiento, direccion, ciudad, foto_perfil, estado_cuenta, id_rol)
                VALUES
                (@nombre, @apellido, @correo, @password, @telefono, @tipo_documento, @numero_documento, @fecha_nacimiento, @direccion, @ciudad, @foto_perfil, @estado_cuenta, @id_rol)
            `);
    },

    findByEmail: async (correo) => {
        await pool.connect();
        const result = await pool.request()
            .input("correo", sql.VarChar, correo)
            .query("SELECT * FROM Usuario WHERE correo=@correo");
        return result.recordset[0];
    }
};

module.exports = UserModel;