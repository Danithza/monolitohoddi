<template>
  <div class="products">
    <h1>Productos</h1>
    <ProductForm
      :product="currentProduct"
      @save="handleSave"
      @cancel="handleCancel"
    />
    <ProductTable
      :products="products"
      @edit="handleEdit"
      @delete="handleDelete"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProductForm from "../components/products/ProductForm.vue";
import ProductTable from "../components/products/ProductTable.vue";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from "../api/productService";

const products = ref([]);
const currentProduct = ref({});

const load = async () => {
  try {
    const response = await getProducts();
    products.value = response.data;
  } catch (err) {
    console.error(err);
  }
};

onMounted(load);

const handleSave = async (product) => {
  try {
    if (product.id_producto) {
      await updateProduct(product.id_producto, product);
    } else {
      await createProduct(product);
    }
    currentProduct.value = {};
    await load();
  } catch (err) {
    console.error(err);
  }
};

const handleEdit = (prod) => {
  currentProduct.value = { ...prod };
};

const handleDelete = async (id) => {
  if (confirm("¿Eliminar producto?")) {
    await deleteProduct(id);
    await load();
  }
};

const handleCancel = () => {
  currentProduct.value = {};
};
</script>

<style scoped>
.products {
  padding: 1rem;
}
</style>