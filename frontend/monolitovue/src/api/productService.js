import api from "./api"

export const getProducts = () => {
  return api.get("/api/products")
}

export const createProduct = (data) => {
  return api.post("/api/products", data)
}

export const updateProduct = (id,data) => {
  return api.put(`/api/products/${id}`,data)
}

export const deleteProduct = (id) => {
  return api.delete(`/api/products/${id}`)
}