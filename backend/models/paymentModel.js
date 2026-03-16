const pool = require("../config/db");
const sql = require("mssql");

const PaymentModel = {

    getAll: async () => {

        await pool.connect();

        const result = await pool.request()
            .query("SELECT * FROM Pago");

        return result.recordset;
    },

    create: async (payment) => {

        return await pool.request()
            .input("metodo", sql.VarChar, payment.metodo_pago)
            .input("estado", sql.VarChar, payment.estado_pago)
            .input("fecha", sql.DateTime, payment.fecha_pago)
            .input("pedido", sql.Int, payment.id_pedido)
            .query(`
                INSERT INTO Pago
                (metodo_pago,estado_pago,fecha_pago,id_pedido)
                VALUES
                (@metodo,@estado,@fecha,@pedido)
            `);
    }

};

module.exports = PaymentModel;