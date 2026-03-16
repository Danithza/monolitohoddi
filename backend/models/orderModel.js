const pool = require("../config/db");
const sql = require("mssql");

const OrderModel = {

    getAll: async () => {

        await pool.connect();

        const result = await pool.request()
            .query("SELECT * FROM Pedido");

        return result.recordset;
    },

    create: async (order) => {

        return await pool.request()
            .input("numero", sql.VarChar, order.numero_pedido)
            .input("fecha", sql.DateTime, order.fecha_pedido)
            .input("direccion", sql.VarChar, order.direccion_entrega)
            .input("estado", sql.VarChar, order.estado)
            .input("usuario", sql.Int, order.id_usuario)
            .query(`
                INSERT INTO Pedido
                (numero_pedido,fecha_pedido,direccion_entrega,estado,id_usuario)
                VALUES
                (@numero,@fecha,@direccion,@estado,@usuario)
            `);
    }

};

module.exports = OrderModel;