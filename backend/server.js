const express = require("express");
const cors = require("cors");
const pool = require("./config/db"); // conexión a la BD

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const orderRoutes = require("./routes/orderRoutes");
const orderDetailRoutes = require("./routes/orderDetailRoutes");
const paymentRoutes = require("./routes/PaymentRoutes");
const roleRoutes = require('./routes/roleRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/order-details", orderDetailRoutes);
app.use("/api/payments", paymentRoutes);
app.use('/api/roles', roleRoutes);
const PORT = 3000;

// probar conexión a la base de datos
pool.connect()
.then(() => {
    console.log("✅ Connected to SQL Server database");
})
.catch(err => {
    console.error("❌ Database connection error:", err);
});

app.listen(PORT, () => {
    console.log("🚀 Server running on port " + PORT);
});