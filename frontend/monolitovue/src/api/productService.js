import api from "./api";

/* =========================
   📦 PRODUCTOS
========================= */

// 🔍 Obtener todos los productos
export const getProducts = async () => {
  return await api.get("/api/products");
};

// ➕ Crear producto
export const createProduct = async (data) => {
  return await api.post("/api/products", data);
};

// ✏️ Actualizar producto
export const updateProduct = async (id, data) => {
  return await api.put(`/api/products/${id}`, data);
};

// ❌ Eliminar producto
export const deleteProduct = async (id) => {
  return await api.delete(`/api/products/${id}`);
};


/* =========================
   🏷 CATEGORÍAS
========================= */

// 🔥 Necesario para el select del formulario
export const getCategorias = async () => {
  return await api.get("/api/categories"); // ✅
};